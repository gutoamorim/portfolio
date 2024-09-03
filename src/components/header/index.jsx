import logo from "../../assets/logo-portfolio.png";
import { NavItem } from "./nav-item";

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
  return (
    <header className="fixed top-0 z-10 w-full h-20 mb-20 flex items-center justify-center">
      <div className="container flex items-center justify-between">
        <img src={logo} width={35} height={35} alt="Logo portfólio" />

        <nav className="flex items-center gap-4 sm:gap-10">
          {NAV_ITEMS.map((item) => (
            <NavItem {...item} key={item.href} />
          ))}
        </nav>
      </div>
    </header>
  );
};
