export function Card({
  title = "Título default",
  description = "Descrição default",
}) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}