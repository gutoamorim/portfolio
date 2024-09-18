import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export const SectionTitle = ({ title, subtitle }) => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: true,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="flex flex-col gap-4">
      <motion.span
        ref={ref1}
        className="font-mono text-sm text-emerald-400"
        initial={{ opacity: 0, x: -100 }}
        animate={inView1 ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {`../${subtitle}`}
      </motion.span>
      <motion.h3
        ref={ref2}
        className="text-3xl font-medium"
        initial={{ opacity: 0, x: -100 }}
        animate={inView2 ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h3>
    </div>
  );
};
