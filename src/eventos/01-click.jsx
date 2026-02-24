import { useState } from "react";

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
    </>
  );
}

export default EventosClick;
