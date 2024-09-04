import { motion } from "framer-motion";

export const SectionTitle = ({ title, subtitle, classname }) => {
  const animeProps = {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
  };

  return (
    <div className="flex flex-col gap-4">
      <motion.span
        className="font-mono text-sm text-emerald-400"
        {...animeProps}
        transition={{ duration: 0.5 }}
      >
        {`../${subtitle}`}
      </motion.span>
      <motion.h3
        className="text-3xl font-medium"
        {...animeProps}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h3>
    </div>
  );
};
