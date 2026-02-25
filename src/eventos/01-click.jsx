import { useState } from "react";

/**
 * Referências para aprender mais sobre Eventos no React:
 * 
 * 📚 Documentação Oficial React - Responding to Events:
 * https://react.dev/learn/responding-to-events
 * 
 * 📚 Documentação Oficial React - Event Handlers:
 * https://react.dev/reference/react-dom/components/common#react-event-object
 * 
 * 💡 Dica importante: sempre passe a função sem parênteses no handler
 * onClick={minhaFuncao}  ✅ Correto
 * onClick={minhaFuncao()} ❌ Errado - executa na página carregada
 */

function EventosClick() {
  function cliqueiNoBotao() {
    alert("Você clicou no primeiro botão!");
  }
  
  function quandoSairBotao() {
    alert("Você passou o mouse sob o segundo botão!");
  }

  return (
    <>
      <h2>Eventos: Click e Mouse</h2>
      <p>Exemplos básicos de eventos onClick e onMouseLeave</p>
      <button onClick={cliqueiNoBotao}>Primeiro botão (onClick)</button>
      <button onMouseLeave={quandoSairBotao}>Segundo botão (onMouseLeave)</button>

      
      <button onClick={() => {
        console.log("Clicou em mim");
      }}> Botão teste </button>
    </>
  );
}

export default EventosClick;
