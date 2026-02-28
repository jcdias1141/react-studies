import { Outlet, NavLink } from "react-router-dom";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const links = [
  { to: "/", label: "Início" },
  { to: "/eventos", label: "Eventos" },
  { to: "/props", label: "Props" },
  { to: "/components", label: "Components" },
  { to: "/estado", label: "useState" },
  { to: "/efeito", label: "useEffect" },
];

export default function Layout() {
  return (
    <>
      <Header links={links} />
      <div className="container">
        <nav className="menu" aria-label="Menu de estudos">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => (isActive ? "ativo" : "")}
              end={to === "/"}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
