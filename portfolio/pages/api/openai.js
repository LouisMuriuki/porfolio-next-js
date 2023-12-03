export default async function (req, res) {

  const usermessage = req.body;

  try {
    let incomingmessages = [];
    fetch(`${process.env.BASEURL}/api/v1/assistant/conversation/chat`, {
      body: JSON.stringify({ message: usermessage }),
      method: "POST",
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then((messages) => {
        console.log(messages);
        if (messages) {
          messages.forEach((msg) => {
            const role = msg.role;
            const content = msg.message;
            console.log(msg);
            incomingmessages.push({ role: role, message: content });
          });
          return res.status(200).json(...incomingmessages);
        } else {
          res.status(400).json({
            role: "assistant",
            message: "Please try again i did not get that correctly",
          });
        }
      });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
