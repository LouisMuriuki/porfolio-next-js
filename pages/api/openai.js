export default async function (req, res) {
  let failedStatus = "expired" || "failed" || "cancelled" || "cancelling";
  let pendingStatus = "in_progress" || "queued";
  let assistantName = "Lui's portfolio Assistant";
  let assistantInstructions =
    "You are a helpful assistant, intergrated into my personal web portfolio, you are to answer people with respect, professional and with a touch of humour";
  let usermessage = req.body;
  let OpenAI = require("openai");
  const openai = new OpenAI();
  // const myassistant = await openai.beta.assistants.create({
  //   name: assistantName,
  //   instructions: assistantInstructions,
  //   tools: [{ type: "code_interpreter" }],
  //   model: "gpt-3.5-turbo",
  // });

  const thread = await openai.beta.threads.create();

  await openai.beta.threads.messages.create(thread.id, {
    role: "user",
    content: usermessage,
  });

  const run = await openai.beta.threads.runs.create(thread.id, {
    assistant_id: process.env.MY_ASSISTANT_ID,
    instructions: "",
  });

  const checkStatusandPrintMessage = async (threadId, runId) => {
    let runStatus = await openai.beta.threads.runs.retrieve(threadId, runId);
    if (runStatus.status === "completed") {
      let messages = await openai.beta.threads.messages.list(threadId);
      if (messages) {
        messages.data.forEach((msg) => {
          const role = msg.role;
          const content = msg.content[0]?.text.value;
          console.log(msg);
          return res.status(200).json({ role: role, message: content });
        });
      }
    } else if (runStatus.status === pendingStatus) {
      checkforStausUpdate();
    } else if (runStatus.status === failedStatus) {
      return res.status(200).json({
        role: "assistant",
        message: "Please try again i did not get that correctly",
      });
    } else {
      return res.status(200).json({
        role: "assistant",
        message: "failed",
      });
    }
  };

  const checkforStausUpdate = () => {
    let timeInterval = setInterval(() => {
      checkStatusandPrintMessage(thread.id, run.id);
    }, 1000);

    setTimeout(() => {
      clearInterval(timeInterval);
    }, 10000);
  };

  checkforStausUpdate();
}
