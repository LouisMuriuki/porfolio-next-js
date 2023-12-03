import OpenAI from "openai";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import { Assistants } from "openai/resources/beta/assistants/assistants";
dotenv.config();

const startConversation = async (req: any, res: any) => {
  try {
    let status = false;
    const openai = new OpenAI();
    console.log(req.body);
    // const pendingStatus = "in_progress" || "queued";
    // const assistantName = "Lui's portfolio Assistant";
    // const assistantInstructions =
    //   "You are a helpful assistant, intergrated into my personal web portfolio, you are to answer people with respect, professional and with a touch of humour";
    const { message } = req.body;

    // const myassistant = await openai.beta.assistants.create({
    //   name: assistantName,
    //   instructions: assistantInstructions,
    //   tools: [{ type: "code_interpreter" }],
    //   model: "gpt-3.5-turbo",
    // });
    console.log("Runing");
    const thread = await openai.beta.threads.create();

    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: message,
    });

    const run = await openai.beta.threads.runs.create(thread.id, {
      //  @ts-ignore
      assistant_id: process.env.MY_ASSISTANT_ID,
      instructions: "",
    });

    const checkStatusandPrintMessage = async (threadId: any, runId: any) => {
      let runStatus = await openai.beta.threads.runs.retrieve(threadId, runId);
      console.log(runStatus.status);
      let incomingmessages: { role: string; message: any }[] = [];
      if (runStatus.status === "completed") {
        let messages = await openai.beta.threads.messages.list(threadId);
        if (messages) {
          console.log("firstmessage", messages);
          messages.data.forEach((msg: any) => {
            const role = msg.role;
            const content = msg.content[0]?.text.value;
            console.log(msg);
            incomingmessages.push({ role: role, message: content });
          });
          status = true;
        }
        return res.status(200).json(incomingmessages);
      } else if (runStatus.status === "failed") {
        console.log(runStatus.status);
        return res.status(400).json({
          role: "assistant",
          message: "Please try again i did not get that correctly",
        });
      } else {
        return;
      }
    };

    const checkforStausUpdate = () => {
      let timeInterval = setInterval(async () => {
        try {
          await checkStatusandPrintMessage(thread.id, run.id);
          if (status) {
            clearInterval(timeInterval);
          }
        } catch (error) {
          console.log(error);
          // Handle the error appropriately
          res.status(500).json({ error: "Internal server error" });
          clearInterval(timeInterval);
        }
      }, 1000);

      // Set a timeout to clear the interval after 10 seconds
      setTimeout(() => {
        clearInterval(timeInterval);
      }, 30000);
    };

    checkforStausUpdate();
  } catch (error) {
    console.log(error);
  }
};

export { startConversation };
