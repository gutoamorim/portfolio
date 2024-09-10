import { HorizontalDivider } from "../../divider/horizontal-divider";
import { SectionTitle } from "../../section-title";
import { ProjectCard } from "./project-card";
import devfinances from "../../../assets/dev-finances.png";
import pokedex from "../../../assets/pokedex.png";
import helpdesk from "../../../assets/help-desk.png";
import webcarros from "../../../assets/web-carros.png";

const PROJECTS = [
  {
    img: devfinances,
    name: "DevFinance$",
    description:
      "Sistema de controle financeiro com entradas, saídas, edição, deleção e filtro de transações.",
    techs: ["HTML", "CSS", "Javascript"],
    urlProject: "https://cesaraugusto.dev/dev-finances/",
    urlGithub: "https://github.com/gutoamorim/dev-finances",
  },
  {
    img: pokedex,
    name: "Pokedex",
    description:
      "Projeto de listagem de pokemos utilizando fetch, com consumo de dados da Poke APi",
    techs: ["HTML", "CSS", "Javascript"],
    urlProject: "http://google.com",
    urlGithub: "http://google.com",
  },
  {
    img: helpdesk,
    name: "Help Desk",
    description: "Sistema de abertura e gerenciamento de chamados.",
    techs: ["React", "Javascript", "Tailwind", "Firebase"],
    urlProject: "http://google.com",
    urlGithub: "http://google.com",
  },
  {
    img: webcarros,
    name: "Web Carros",
    description: "Plataforma de anuncio de veículos inspirada na WebMotors.",
    techs: ["React", "Typescript", "Tailwind", "Firebase"],
    urlProject: "http://google.com",
    urlGithub: "http://google.com",
  },
];

export const Projects = () => {
  return (
    <section className="container py-20" id="projects">
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
