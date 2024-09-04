import { useState } from "react";
import logo from "../../assets/logo-portfolio.png";
import { NavItem } from "./nav-item";

import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "Skils",
    href: "#skils",
  },
  {
    label: "Projetos",
    href: "#projects",
  },
  {
    label: "Contato",
    href: "#contact",
  },
];

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  function handleMenu() {
    setIsActive((state) => !state);
  }

  return (
    <motion.header
      className="fixed top-0 z-10 w-full h-16 flex items-center justify-center bg-gray-900"
      initial={{ top: -100 }}
      animate={{ top: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container flex items-center justify-between">
        <img src={logo} width={35} height={35} alt="Logo portfólio" />

        <div>
          <button className="md:hidden" onClick={handleMenu}>
            {isActive ? <IoClose size={30} /> : <IoMenu size={30} />}
          </button>
          <nav
            className={`${isActive ? "block" : "hidden"}
            top-16 transition ease-in-out duration-500 md:block absolute md:static left-0 bg-gray-900 w-full py-16 md:py-0`}
          >
            <ul className="flex flex-col md:flex-row items-center gap-10">
              {NAV_ITEMS.map((item) => (
                <li key={item.href} onClick={handleMenu}>
                  <NavItem {...item} />
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};
