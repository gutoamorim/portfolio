import { IoMdHeart } from "react-icons/io";

export const Footer = () => {
  return (
    <footer className="h-14 w-full flex items-center justify-center bg-gray-950">
      <span className="flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400">
        Feito com
        <IoMdHeart className="text-emerald-400" size={13} />
        por <strong className="font-medium">Cesar Augusto</strong>
      </span>
    </footer>
  );
};
