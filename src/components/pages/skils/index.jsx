import { SectionTitle } from "../../section-title";
import { Skil } from "./skil";
import {
  TbBrandCss3,
  TbBrandFirebase,
  TbBrandGit,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandTypescript,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandVite,
} from "react-icons/tb";

import { motion } from "framer-motion";

const TECHS = [
  {
    name: "HTML",
    icon: <TbBrandHtml5 />,
  },
  {
    name: "CSS",
    icon: <TbBrandCss3 />,
  },
  {
    name: "Javascript",
    icon: <TbBrandJavascript />,
  },
  {
    name: "Typescript",
    icon: <TbBrandTypescript />,
  },
  {
    name: "ReactJs",
    icon: <TbBrandReact />,
  },
  {
    name: "Tailwind",
    icon: <TbBrandTailwind />,
  },
  {
    name: "Vite",
    icon: <TbBrandVite />,
  },
  {
    name: "Next.js",
    icon: <TbBrandNextjs />,
  },
  {
    name: "Firebase",
    icon: <TbBrandFirebase />,
  },
  {
    name: "Git",
    icon: <TbBrandGit />,
  },
];

export const Skils = () => {
  return (
    <section className="container py-20" id="skils">
      <SectionTitle subtitle="competencias" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {TECHS.map((tech, i) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.15, delay: i * 0.1 }}
          >
            <Skil {...tech} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};
