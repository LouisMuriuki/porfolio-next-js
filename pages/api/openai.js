import OpenAI from "openai";
import * as dotenv from "dotenv";
dotenv.config();
export default async function (req, res) {
  try {
    let status = false;

    const openai = new OpenAI();
    const  message  = req.body;
    const thread = await openai.beta.threads.create();
    console.log(thread);
    await openai.beta.threads.messages.create(thread.id, {
      role: "user",
      content: message,
    });

    const run = await openai.beta.threads.runs.create(thread.id, {
      //  @ts-ignore
      assistant_id: process.env.MY_ASSISTANT_ID,
      instructions: "",
    });
    console.log(run);

    const checkStatusandPrintMessage = async (threadId, runId) => {
      let runStatus = await openai.beta.threads.runs.retrieve(threadId, runId);
      console.log(runStatus.status);
      let incomingmessages= [];
      if (runStatus.status === "completed") {
        let messages = await openai.beta.threads.messages.list(threadId);
        if (messages) {
          console.log("firstmessage", messages);
          messages.data.forEach((msg) => {
            const role = msg.role;
            const content = msg.content[0]?.text.value;
            console.log(msg);
            incomingmessages.push({ role: role, message: content });
          });
          status = true;
        }
        return res.status(200).json(...incomingmessages);
      } else if (runStatus.status === "failed") {
        console.log(runStatus.status);
        return res.status(400).json({
          role: "assistant",
          message: "Please try again i did not get that correctly",
        });
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

      // Set a timeout to clear the interval after 5 mins
      setTimeout(() => {
        clearInterval(timeInterval);
      }, 300000);
    };

    checkforStausUpdate();
  } catch (error) {
    console.log(error);
  }
}

