import React from "react";

export default function ComponentsInfo() {
  return (
    <div>
      <h2>O que são componentes?</h2>
      <p>
        Componentes são blocos reutilizáveis de UI. Cada componente encapsula
        estrutura (HTML/JSX), estilo e comportamento (JS) para uma parte da
        interface.
      </p>

      <h3>Para que servem?</h3>
      <p>
        Eles ajudam a organizar a aplicação, facilitar reutilização e manter o
        código mais legível e testável.
      </p>

      <h3>Como criamos?</h3>
      <p>
        Um componente funcional básico em React é uma função que retorna JSX:
      </p>
      <pre>{'function MeuComponente() {\n  return <div>Olá</div>\n}\n\nexport default MeuComponente\n'}</pre>

      <h3>Como chamamos dentro da página?</h3>
      <p>
        Primeiro importamos o componente e depois o usamos como uma tag JSX. Ex:
      </p>
      <pre>{"import MeuComponente from './components/MeuComponente'\n\n// dentro do JSX\n<MeuComponente />\n"}</pre>

      <h3>Sobre seus componentes</h3>
      <p>
        Você já criou o `Header` e o `Footer` em `src/components`. Eles são
        componentes simples que você importa e usa em `App.jsx` como {'<Header />'}
        e {'<Footer />'}.
      </p>
    </div>
  );
}
