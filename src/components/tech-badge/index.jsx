import { motion } from "framer-motion";
import { forwardRef } from "react";

export const TechBadge = forwardRef(({ name, ...props }, ref) => {
  return (
    <motion.span
      ref={ref}
      className="text-sm text-emerald-400 bg-emerald-900/80 py-1 px-3 rounded-lg"
      {...props}
    >
      {name}
    </motion.span>
  );
});

TechBadge.displayName = "TechBadge";
