import React, { useState } from "react";

export const Floatingwindow = () => {
  const [inputvalue, setInputValue] = useState("");
  const [chatlog, setChatlog] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setChatlog((chatlog) => [
      ...chatlog,
      { type: "user", message: inputvalue },
    ]);
    setInputValue("");

    fetch("/api/openai", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputvalue),
    }).then((res) => {
      res.json().then((data) => {
        console.log(data);
      });
    });
  };

  return (
    <div>
      <h1></h1>
      <div>
        {chatlog.map((chat, i) => {
          return <div key={i}> {chat.message}</div>;
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Type your message..."
          value={inputvalue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Floatingwindow;
