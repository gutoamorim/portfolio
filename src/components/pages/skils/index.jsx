import { SectionTitle } from "../../section-title";
import { Skil } from "./skil";
import {
  TbBrandCss3,
  TbBrandFirebase,
  TbBrandGit,
  TbBrandHtml5,
  TbBrandJavascript,
  TbBrandNextjs,
  TbBrandReact,
  TbBrandTailwind,
  TbBrandVite,
} from "react-icons/tb";

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
    <section className="container py-16" id="skils">
      <SectionTitle subtitle="competencias" title="Conhecimentos" />

      <div className="grid grid-cols-[repeat(auto-fit,minmax(264px,1fr))] gap-3 mt-[60px]">
        {TECHS.map((tech) => (
          <Skil {...tech} key={tech.name} />
        ))}
      </div>
    </section>
  );
};
