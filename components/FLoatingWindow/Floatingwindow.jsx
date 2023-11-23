import React, { useContext, useState } from "react";
import ModalContext from "../../context/modalContext";
import { IoClose } from "react-icons/io5";
import Lottie from "lottie-react";
import animationData from "../../public/assests/lottie/running_animation.json";
export const Floatingwindow = () => {
  const { modalOpen, setModalOpen } = useContext(ModalContext);
  const [inputvalue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [chatlog, setChatlog] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setChatlog((chatlog) => [
      ...chatlog,
      { role: "user", message: inputvalue },
    ]);
    setInputValue("");
    setLoading(true);
    fetch("/api/openai", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputvalue),
    }).then((res) => {
      res
        .json()
        .then((data) => {
          console.log(data);
          setChatlog((chatlog) => [
            ...chatlog,
            { role: data.role, message: data?.message },
          ]);
        })
        .finally(() => {
          setLoading(false);
        });
    });
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  const openModal = () => {
    setModalOpen(true);
  };

  return (
    <>
      {modalOpen ? (
        <div className="flex items-center rounded-lg  bg-[#242c3a] justify-end max-h-screen">
          <div className="h-[700px] p-4 shadow-md w-94 max-w-md ">
            <div className="flex w-full items-center justify-between">
              <div/>
              <h1 className="flex  justify-center">Danvinci</h1>
              <IoClose
                onClick={closeModal}
                color="red"
                className="flex justify-end cursor-pointer hover:scale-125 ease-in duration-300"
              />
            </div>
            <div className="mt-4 flex h-[600px] flex-col ">
              <div className="flex  flex-col">
                {chatlog.map((chat, i) => (
                  <div
                    key={i}
                    className={`flex items-center   px-1 ${
                      chat.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {loading &&chat.role !== "user"  ? (
                      <Lottie
                        style={{}}
                        animationData={animationData}
                        className="flex justify-center items-center scale-50"
                        loop={true}
                      />
                    ) : (
                      <div
                        className={`py-1 px-2 mb-5 rounded-md ${
                          chat.role === "user" ? "bg-purple-500" : "bg-teal-500"
                        }`}
                      >
                        {chat.message.length > 1 ? (
                          <p className="text-slate-100">{chat.message}</p>
                        ) : null}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <form className="mt-auto" onSubmit={handleSubmit}>
                <div className="w-full">
                  <div className="flex items-center gap-2 justify-between px-1">
                    <input
                      className="rounded-sm py-2 px-1 w-[85%] outline-none text-black"
                      placeholder="Type your message..."
                      value={inputvalue}
                      onChange={(e) => setInputValue(e.target.value)}
                      type="text"
                    />
                    <button disabled={loading} className="px-1 py-2" type="submit">
                      Send
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <button
            onClick={openModal}
            className="hover:scale-105  ease-in duration-300 flex mt-8 rounded-full py-3 px-8 items-center  text-slate-100"
          >
            Open Modal
          </button>
        </div>
      )}
    </>
  );
};

export default Floatingwindow;
