import { useState, useEffect } from "react";
import EventosClick from "./eventos/01-click";

import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import ComponentsInfo from "./components/ComponentsInfo";

function App() {
  const [topicoAtivo, setTopicoAtivo] = useState("inicio");

  useEffect(() => {
    console.log("topicoAtivo ->", topicoAtivo);
  }, [topicoAtivo]);

  return (
    <>
      <Header />
      <div className="container">
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
            className={topicoAtivo === "components" ? "ativo" : ""}
            onClick={() => setTopicoAtivo("components")}
          >
            Components
          </button>
        </nav>

        <main className="conteudo">
          {topicoAtivo === "inicio" && (
            <>
              <h2>Bem-vindo aos meus Estudos de React! 👋</h2>
              <p>Use o menu acima para navegar entre os tópicos estudados.</p>
              <ul>
                <li>
                  <strong>Eventos (24/02)</strong> - Aprenda sobre onClick,
                  onMouseLeave e outros eventos
                </li>
                <li>
                  <strong>Props (25/02)</strong> - Descubra como passar dados
                  entre componentes
                </li>
              </ul>
            </>
          )}

          {topicoAtivo === "eventos" && <EventosClick />}

          {topicoAtivo === "components" && <ComponentsInfo />}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
