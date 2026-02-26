import { StudyBlock } from "../components/StudyBlock";
import { NavLink } from "../components/NavLink";

const code = `// Quem usa passa os valores (props)
const links = [
  { to: "/", label: "Início" },
  { to: "/props", label: "Props" },
];

<nav>
  <ul>
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

// NavLink recebe: link, label, target (opcional)`;

const demoLinks = [
  { to: "/", label: "Início" },
  { to: "/eventos", label: "Eventos" },
  { to: "/props", label: "Props" },
  { to: "/components", label: "Components" },
];

export default function Props() {
  return (
    <StudyBlock
      title="Props: passando dados para componentes"
      description="O Header usa esse padrão: um array de links, .map(), e NavLink recebendo link, label e target. Quem chama o componente passa os valores (props)."
      code={code}
    >
      <nav aria-label="Exemplo de navegação com props">
        <ul style={{ display: "flex", gap: "1rem", listStyle: "none", padding: 0, margin: 0 }}>
          {demoLinks.map((link) => (
            <NavLink
              key={link.label}
              link={link.to}
              label={link.label}
              target={link.target}
            />
          ))}
        </ul>
      </nav>
    </StudyBlock>
  );
}
