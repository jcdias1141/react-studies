import { StudyBlock } from "../components/StudyBlock";
import ComponentsInfo from "../components/ComponentsInfo";

const code = `function MeuComponente() {
  return <div>Olá</div>;
}
export default MeuComponente;`;

export default function Components() {
  return (
    <StudyBlock
      title="O que são componentes?"
      description="Funções que retornam JSX. Reutilizáveis e fáceis de manter."
      code={code}
    >
      <ComponentsInfo />
    </StudyBlock>
  );
}
