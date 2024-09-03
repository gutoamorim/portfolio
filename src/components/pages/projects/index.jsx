import { HorizontalDivider } from "../../divider/horizontal-divider";
import { SectionTitle } from "../../section-title";
import devfinances from "../../../assets/dev-finances.png";
import { ProjectCard } from "./project-card";

const PROJECTS = [
  {
    img: devfinances,
    name: "DevFinance$",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tempore quam dolore rem consequatur omnis dicta nesciunt aperiam placeat incidunt?",
    techs: ["HTML", "CSS", "Javascript"],
    urlProject: "http://google.com",
    urlGithub: "http://google.com",
  },
  {
    img: devfinances,
    name: "DevFinance$",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tempore quam dolore rem consequatur omnis dicta nesciunt aperiam placeat incidunt?",
    techs: ["HTML", "CSS", "Javascript"],
    urlProject: "http://google.com",
    urlGithub: "http://google.com",
  },
];

export const Projects = () => {
  return (
    <section className="container py-16" id="projects">
      <SectionTitle subtitle="portfolio" title="Projetos" />

      <div className="mt-[60px]">
        {PROJECTS.map((project) => (
          <>
            <ProjectCard {...project} key={project.name} />
            <HorizontalDivider />
          </>
        ))}
      </div>
    </section>
  );
};
