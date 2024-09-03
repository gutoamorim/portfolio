import avatar from "../../../assets/avatar.png";
import { Button } from "../../button";

import { TbBrandGithub } from "react-icons/tb";
import { TbBrandLinkedin } from "react-icons/tb";
import { TbBrandWhatsapp } from "react-icons/tb";
import { TbMail } from "react-icons/tb";

const SOCIAL = [
  {
    url: "",
    icon: <TbBrandGithub />,
  },
  {
    url: "",
    icon: <TbBrandLinkedin />,
  },
  {
    url: "",
    icon: <TbBrandWhatsapp />,
  },
  {
    url: "",
    icon: <TbMail />,
  },
];

export const Home = () => {
  return (
    <sectioon className="w-full min-h-dvh bg-hero-image bg-cover bg-center bg-no-repeat flex">
      <div className="container flex items-center justify-center pt-10 gap-5 md:justify-between flex-col-reverse md:flex-row md:gap-6">
        <div className="w-full lg:max-w-[530px]">
          <p className="font-mono text-emerald-400">Olá, meu nome é</p>
          <h2 className="text-4xl font-medium mt-2">Cesar Augusto</h2>
          <p className="text-gray-400 my-6 text-sm sm:text-base">
            Sou desenvolvedor front-end apaixonado por tecnologia. Atualmente
            curso Análise e Desenvolvimento de Sistemas com previsão de formação
            em julho/2025.
          </p>

          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4">
              <Button>Entre em contato</Button>
              <Button>Download CV</Button>
            </div>

            <div className="text-3xl text-gray-600 flex items-center gap-3 h-20">
              {SOCIAL.map((item, index) => (
                <a
                  href={item.url}
                  target="_blank"
                  className="hover:text-gray-100 transition-colors"
                  key={index}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <img
          src={avatar}
          alt="Foto de Perfil do Cesar Augusto"
          className="max-w-[200px] h-auto lg:max-w-[350px] object-cover border-2 border-emerald-400 rounded-full"
        />
      </div>
    </sectioon>
  );
};
