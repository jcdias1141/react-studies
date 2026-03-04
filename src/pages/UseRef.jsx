import { StudyBlock } from "../components/StudyBlock";
import { FocoInput } from "../components/FocoInput";

const code = `import { useRef } from "react"

export function FocoInput() {
  const inputRef = useRef(null)

  const handleFocar = () => {
    inputRef.current?.focus()
  }

  return (
    <>
      <input ref={inputRef} type="text" placeholder="..." />
      <button onClick={handleFocar}>Focar no input</button>
    </>
  )
}`;

export default function UseRef() {
  return (
    <StudyBlock
      title="useRef"
      description="useRef guarda uma referência mutável que persiste entre renderizações e não causa re-render ao mudar. Muito usado para acessar o DOM (ex.: .focus(), .scrollIntoView()) ou guardar valores que não precisam disparar nova renderização."
      code={code}
    >
      <FocoInput />
    </StudyBlock>
  );
}
