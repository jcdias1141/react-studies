import { createContext, useContext, useState } from "react";
import { StudyBlock } from "../../components/StudyBlock";

const TemaContext = createContext("claro");

function BotaoTema({ setTema }) {
  const tema = useContext(TemaContext);
  const proximo = tema === "claro" ? "escuro" : "claro";

  return (
    <div>
      <p>Tema atual: <strong>{tema}</strong></p>
      <button
        type="button"
        onClick={() => setTema(proximo)}
        className={tema}
      >
        Trocar para {proximo}
      </button>
    </div>
  );
}

const code = `// 1. Criar o contexto
const TemaContext = createContext("claro");

// 2. Prover (quem tem o valor envolve os filhos com Provider)
<TemaContext.Provider value={tema}>
  <Pagina />
</TemaContext.Provider>

// 3. Consumir (qualquer componente dentro do Provider)
function Botao() {
  const tema = useContext(TemaContext);
  return <button className={tema}>Tema: {tema}</button>;
}`;

export default function UseContext() {
  const [tema, setTema] = useState("claro");

  const hint = `useContext em uma frase: o contexto é um "quadro" com um valor. Quem está dentro do Provider pode "olhar pro quadro" com useContext e ver esse valor, sem precisar que ninguém passe props de mão em mão.

Analogia do quadro na sala:
• Context = o quadro onde está escrito o valor (ex.: tema claro/escuro).
• Provider = a "sala": todo componente que está dentro dele pode ver o quadro.
• useContext = o componente "olha pro quadro" e lê o valor.
• Quando quem tem o estado muda o valor (ex.: setTema), é como "apagar e escrever no quadro"; quem usa useContext continua só olhando e vê a mudança.`;

  return (
    <StudyBlock
      title="useContext"
      description="useContext permite acessar um valor compartilhado (o contexto) sem passar por props em cada nível. Aqui: o tema é guardado no estado da página, o Provider repassa para todos os filhos, e o BotaoTema consome com useContext."
      hint={hint}
      code={code}
    >
      <TemaContext.Provider value={tema}>
        <BotaoTema setTema={setTema} />
      </TemaContext.Provider>
    </StudyBlock>
  );
}