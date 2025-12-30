import { RxCross1 } from "react-icons/rx";
import { useMessage } from "../../context/MessageContext";

const MessagePopup = () => {
  const { message, messageType, clearMessage } = useMessage();

  if (!message) {
    return null;
  }

  const bgColor =
    messageType === "success" ? "bg-green-600 " : "bg-orange-600 ";

  return (
    <div
      className={`fixed right-5 top-2 z-1000 flex items-center gap-3 h-8 px-3 py-4 font-sans ${bgColor} text-white text-[18px] rounded-md shadow-lg animate-bounce-twice animate-slide-in`}
    >
      <p className="">{message}</p>
      <RxCross1
        onClick={clearMessage}
        className="text-gray-800 cursor-pointer hover:text-gray-900"
      />
    </div>
  );
};

export default MessagePopup;
