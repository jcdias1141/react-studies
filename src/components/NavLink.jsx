import { Link } from "react-router-dom";

export function NavLink({ link, label, target }) {
  const rel = target === "_blank" ? "noopener noreferrer" : undefined;
  return (
    <li>
      <Link to={link} target={target} rel={rel}>
        {label}
      </Link>
    </li>
  );
}
