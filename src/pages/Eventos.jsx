import { StudyBlock } from "../components/StudyBlock";
import EventosClick from "../eventos/01-click";

const code = `function MeuBotao() {
  function aoClicar() {
    alert("Clicou!");
  }
  return <button onClick={aoClicar}>Clique</button>;
}`;

export default function Eventos() {
  return (
    <StudyBlock
      title="Eventos: onClick e onMouseLeave"
      description="No handler, passe a função sem chamar: onClick={funcao} ✅ — onClick={funcao()} ❌ executa na hora."
      code={code}
    >
      <EventosClick />
    </StudyBlock>
  );
}
