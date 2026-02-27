import { useState } from "react";

export function Counter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  return (
    <>
      <h2>Exemplo do useState com um contador</h2>
      <p>Contador: {count}</p>
      <button onClick={handleIncrement}>Incrementar</button>
    </>
  );
}
