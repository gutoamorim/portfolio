import iconTitle from "../../../assets/project-title-icon.svg";
import { TechBadge } from "../../tech-badge";
import { TbExternalLink } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";

export const ProjectCard = ({
  img,
  name,
  description,
  techs,
  urlProject,
  urlGithub,
}) => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <img
          src={img}
          width={420}
          height={304}
          alt={`Thumbnail do projeto ${name}`}
          className=" h-[200px] sm:h-[300px] object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <img src={iconTitle} alt="" width={28} height={28} />
          {name}
        </h3>
        <p className="text-gray-400 my-6">{description}</p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {techs.map((tech) => (
            <TechBadge name={tech} key={tech} />
          ))}
        </div>
        <div className="flex items-center justify-around sm:justify-start sm:gap-10">
          <a
            href={urlProject}
            className="flex items-center gap-1.5 hover:text-emerald-400"
            target="_blank"
          >
            <TbExternalLink />
            Ver projeto
          </a>
          <a
            href={urlGithub}
            className="flex items-center gap-1.5 hover:text-emerald-400"
            target="_blank"
          >
            <TbBrandGithub />
            Ver código
          </a>
        </div>
      </div>
    </div>
  );
};
