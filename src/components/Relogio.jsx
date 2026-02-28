import { useState, useEffect } from "react";

export function Relogio() {
  const [hora, sethora] = useState("");

  useEffect(() => {
    //setInterval é uma função do JavaScript puro, não do React. Ela executa algo repetidamente em um intervalo de tempo. O resultado dela é salvo em intervalo para poder ser cancelado depois.
    const intervalo = setInterval(() => {
      //A cada 1000 milissegundos (1 segundo) ela pega a hora atual e atualiza o estado. O React detecta a mudança e re-renderiza o componente com a nova hora na tela.
      const agora = new Date().toLocaleTimeString();
      sethora(agora); // 👈 minúsculo igual ao seu
    }, 1000);

    //
    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <p>Hora atual: {hora}</p>
    </>
  );
}
