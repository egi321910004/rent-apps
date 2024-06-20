import React, { useEffect, useState } from "react";
import { FaUserTie } from "react-icons/fa";
import { MdHelp } from "react-icons/md";

const ChatBotComponent = () => {
  const [isChatBoxVisible, setChatBoxVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [hasGreeted, setHasGreeted] = useState(false);

  const toggleChatBox = () => {
    setChatBoxVisible((prev) => !prev);
  };

  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputMessage.trim()) {
      // Add user message
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "You", text: inputMessage },
      ]);

      // Check if the bot response has been added
      if (!hasGreeted) {
        // Add bot response
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            sender: "Dwi Rendra",
            text:
              "Silahkan Hubungi Kami melalui Telephone: +62 222312 Atau Email CS kami: CS@rentapps.co.id ",
          },
        ]);
        setHasGreeted(true); // Mark as greeted
      }

      setInputMessage(""); // Clear input after sending
    }
  };

  useEffect(() => {
    if (isChatBoxVisible && !hasGreeted) {
      // Send greeting message when chatbox is opened
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "Dwi Rendra", text: "Hallo, Ada yang bisa dibantu?" },
      ]);
      setHasGreeted(true);
    }
  }, [isChatBoxVisible, hasGreeted]);

  return (
    <div className="relative">
      <button
        className="fixed bottom-4 right-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 border rounded-full w-16 h-16 hover:bg-green-400 m-0 cursor-pointer border-gray-200 bg-none p-0 normal-case leading-5 hover:text-gray-900"
        type="button"
        aria-haspopup="dialog"
        aria-expanded="false"
        onClick={toggleChatBox}
      >
        <MdHelp style={{ fontSize: "32px" }} />
      </button>
      {isChatBoxVisible && (
        <div className="fixed bottom-20 right-4 bg-white border rounded-lg shadow-lg w-80">
          <div className="p-4 border-b">
            <h3 className="text-lg font-semibold">
              Rent<b className="text-red-500">Apps</b> Online Chat
            </h3>
          </div>
          <div className="p-4 h-66 overflow-y-auto">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-4 p-2 rounded ${
                  message.sender === "Dwi Rendra"
                    ? "bg-green-200 text-green-800 text-left"
                    : "bg-gray-200 text-gray-800 text-right"
                }`}
              >
                <div className="font-bold">{message.sender}:</div>
                <div>{message.text}</div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="p-4 border-t flex">
            <input
              type="text"
              value={inputMessage}
              onChange={handleInputChange}
              className="flex-1 border rounded px-2 py-1 mr-2"
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ChatBotComponent;
