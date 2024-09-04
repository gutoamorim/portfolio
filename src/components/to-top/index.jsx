import { FaAngleUp } from "react-icons/fa6";

export const ToTop = () => {
  return (
    <div className="w-10 h-10 bg-emerald-400 rounded-full text-zinc-50 flex items-center justify-center fixed right-5 bottom-5 z-20 cursor-pointer">
      <FaAngleUp />
    </div>
  );
};
