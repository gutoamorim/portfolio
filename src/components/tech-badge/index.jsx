import { motion } from "framer-motion";

export const TechBadge = ({ name, ...props }) => {
  return (
    <motion.span
      className="text-sm text-emerald-400 bg-emerald-900/80 py-1 px-3 rounded-lg"
      {...props}
    >
      {name}
    </motion.span>
  );
};
