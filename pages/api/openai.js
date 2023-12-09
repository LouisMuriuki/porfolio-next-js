import OpenAI from "openai";
import * as dotenv from "dotenv";
dotenv.config();
export default async function (req, res) {
  try {
    let status = false;

    const openai = new OpenAI();
    console.log(req.body);
    // const pendingStatus = "in_progress" || "queued";
    // const assistantName = "Lui's portfolio Assistant";
    // const assistantInstructions =
    //   "You are a helpful assistant, intergrated into my personal web portfolio, you are to answer people with respect, professional and with a touch of humour";
    const  message  = req.body;

    // const myassistant = await openai.beta.assistants.create({
    //   name: assistantName,
    //   instructions: assistantInstructions,
    //   tools: [{ type: "code_interpreter" }],
    //   model: "gpt-3.5-turbo",
    // });
    console.log("Runing");
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

      // Set a timeout to clear the interval after 10 seconds
      setTimeout(() => {
        clearInterval(timeInterval);
      }, 30000);
    };

    checkforStausUpdate();
  } catch (error) {
    console.log(error);
  }
}

// try {
//   let incomingmessages = [];
//   fetch(`${process.env.BASEURL}/api/v1/assistant/conversation/chat`, {
//     body: JSON.stringify({ message: usermessage }),
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//   })
//     .then((res) => {
//       if (res.status === 200) {
//         return res.json();
//       } else {
//         console.log(`Server responded with status: ${res.status}`);
//       }
//     })
//     .then((data) => {
//       console.log(data);
//       if (data) {
//         data.forEach((msg) => {
//           const role = msg.role;
//           const content = msg.message;
//           console.log(msg);
//           incomingmessages.push({ role: role, message: content });
//         });
//         return res.status(200).json(...incomingmessages);
//       }
//       // res.status(400).json({
//       //   role: "assistant",
//       //   message: "Please try again i did not get that correctly",
//       // });
//     });
// } catch (error) {
//   console.error("Error:", error);
//   res.status(500).json({ error: "Internal Server Error" });
// }
