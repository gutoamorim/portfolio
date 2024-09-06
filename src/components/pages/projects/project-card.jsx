import iconTitle from "../../../assets/project-title-icon.svg";
import { TechBadge } from "../../tech-badge";
import { TbExternalLink } from "react-icons/tb";
import { TbBrandGithub } from "react-icons/tb";

import { motion } from "framer-motion";
import { fadeUpAnimation, techBadgeAnimation } from "../../../lib/animations";

export const ProjectCard = ({
  img,
  name,
  description,
  techs,
  urlProject,
  urlGithub,
}) => {
  return (
    <motion.div
      className="flex flex-col lg:flex-row lg:items-center"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-full h-full"
        initial={{ opacity: 0, y: 100, scale: 0.5 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100 }}
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        <img
          src={img}
          width={420}
          height={304}
          alt={`Thumbnail do projeto ${name}`}
          className=" h-[200px] sm:h-[300px] object-cover rounded-lg"
        />
      </motion.div>

      <div className="w-full mt-6 lg:mt-0">
        <motion.h3
          className="flex items-center gap-3 font-medium text-lg text-gray-50"
          {...fadeUpAnimation}
          transition={{ duration: 0.7 }}
        >
          <img src={iconTitle} alt="" width={28} height={28} />
          {name}
        </motion.h3>
        <motion.p
          className="text-gray-400 my-6"
          {...fadeUpAnimation}
          transition={{ duration: 0.2, delay: 0.3 }}
        >
          {description}
        </motion.p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          {techs.map((tech, i) => (
            <TechBadge
              name={tech}
              key={tech}
              {...techBadgeAnimation}
              transition={{ duration: 0.3, delay: i * 0.3 }}
            />
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
    </motion.div>
  );
};
