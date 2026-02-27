import { FaCode } from "react-icons/fa6";
import { NavLink } from "../components/NavLink";

const links = [
  { to: "/", label: "Início" },
  {
    to: "https://pt-br.legacy.reactjs.org/docs/getting-started.html",
    label: "Documentação",
    target: "_blank",
  },
];

export function Header() {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <h1>
            <FaCode /> Estudos React
          </h1>
          <ul className="menu">
            {links.map((link) => (
              <NavLink
                key={link.label}
                link={link.to}
                label={link.label}
                target={link.target}
              />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
