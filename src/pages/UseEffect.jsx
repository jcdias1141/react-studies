import { StudyBlock } from "../components/StudyBlock";
import { Counter } from "../components/Counter";
import { BotaoCurtir } from "../components/BotaoCurtir";
import { Relogio } from "../components/Relogio";
import { Hello } from "../components/Hello";
import { Contador } from "../components/Contador";

const code = `import { useState, useEffect } from "react"

export function Relogio() {
  const [hora, sethora] = useState("")

  useEffect(() => {
    const intervalo = setInterval(() => {
      const agora = new Date().toLocaleTimeString()
      sethora(agora) // 👈 minúsculo igual ao seu
    }, 1000)

    return () => clearInterval(intervalo)
  }, [])

  return (
    <>
      <p>Hora atual: {hora}</p>
    </>
  )
}`;

export default function UseState() {
  return (
    <StudyBlock
      title="useEffect"
      description="useEffect é um hook que permite executar uma função quando o componente é renderizado."
      code={code}
    >
      <Relogio />
      <Hello />
      <Contador />
    </StudyBlock>
  );
}
