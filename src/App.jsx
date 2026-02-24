import { useState } from "react";
import EventosClick from "./eventos/01-click";
import PropsBasicas from "./props/01-props-basicas";
import "./App.css";

function App() {
  const [topicoAtivo, setTopicoAtivo] = useState("inicio");

  return (
    <div className="container">
      <h1>📚 Estudos React</h1>
      
      <nav className="menu">
        <button 
          className={topicoAtivo === "inicio" ? "ativo" : ""}
          onClick={() => setTopicoAtivo("inicio")}
        >
          Início
        </button>
        <button 
          className={topicoAtivo === "eventos" ? "ativo" : ""}
          onClick={() => setTopicoAtivo("eventos")}
        >
          Eventos (24/02)
        </button>
        <button 
          className={topicoAtivo === "props" ? "ativo" : ""}
          onClick={() => setTopicoAtivo("props")}
        >
          Props (25/02)
        </button>
      </nav>

      <main className="conteudo">
        {topicoAtivo === "inicio" && (
          <>
            <h2>Bem-vindo aos meus Estudos de React! 👋</h2>
            <p>Use o menu acima para navegar entre os tópicos estudados.</p>
            <ul>
              <li><strong>Eventos (24/02)</strong> - Aprenda sobre onClick, onMouseLeave e outros eventos</li>
              <li><strong>Props (25/02)</strong> - Descubra como passar dados entre componentes</li>
            </ul>
          </>
        )}
        
        {topicoAtivo === "eventos" && <EventosClick />}
        
        {topicoAtivo === "props" && <PropsBasicas />}
      </main>
    </div>
  );
}

export default App;
