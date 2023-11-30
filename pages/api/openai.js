let OpenAI = require("openai");
export default async function handler(req, res) {
  const openai = new OpenAI({apiKey:'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'});
  // let pendingStatus = "in_progress" || "queued";
  // let assistantName = "Lui's portfolio Assistant";
  // let assistantInstructions =
  //   "You are a helpful assistant, intergrated into my personal web portfolio, you are to answer people with respect, professional and with a touch of humour";
  let usermessage = req.body;

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
    console.log("CHECKING STATUS");
    let runStatus = await openai.beta.threads.runs.retrieve(threadId, runId);
    if (runStatus.status === "completed") {
      let messages = await openai.beta.threads.messages.list(threadId);
      if (messages) {
        let responseMessages = [];
        messages.data.forEach((msg) => {
          const role = msg.role;
          const content = msg.content[0]?.text.value;
          console.log("MESSAGE",msg);
          responseMessages.push({ role, message: content });
        });
        return res.status(200).json(...responseMessages);
      }
    } else if (
      runStatus.status === "expired" ||
      runStatus.status === "failed" ||
      runStatus.status === "cancelled"
    ) {
      return res.status(200).json({
        role: "assistant",
        message: "Please try again i did not get that correctly",
      });
    } else {
      return;
    }
  };

  const checkforStatusUpdate = () => {
    let timeInterval = setInterval(() => {
      checkStatusandPrintMessage(thread.id, run.id);
    }, 1000);

    setTimeout(() => {
      clearInterval(timeInterval);
    }, 10000);
  };

  checkforStatusUpdate();
}
/**const OpenAI = require('openai');
const fs = require('fs');

// Load your API key from an environment variable or secret management service
const openai = new OpenAI(process.env.OPENAI_API_KEY);

// Load the prompt from the data.json file
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));
const prompt = data['Phạm Quang Việt'];

export default async function handler(req, res) {
  const userMessage = req.body;

  // Concatenate the prompt and the user's message
  const message = `${prompt}\n${userMessage}`;

  try {
    const gptResponse = await openai.complete({
      engine: 'davinci',
      prompt: message,
      maxTokens: 60
    });

    const aiMessage = gptResponse.data.choices[0].text.trim();
    res.status(200).json({ message: aiMessage });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error processing request' });
  }
} */