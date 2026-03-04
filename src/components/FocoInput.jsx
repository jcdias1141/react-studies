import { useRef } from "react";

export function FocoInput() {
  const inputRef = useRef(null);

  const handleFocar = () => {
    inputRef.current?.focus();
  };

  return (
    <div style={{ display: "flex", gap: "0.5rem", alignItems: "center", flexWrap: "wrap" }}>
      <input
        ref={inputRef}
        type="text"
        placeholder="Clique no botão para focar"
        aria-label="Campo de texto para demonstração de useRef"
        style={{ padding: "0.5rem" }}
      />
      <button type="button" onClick={handleFocar}>
        Focar no input
      </button>
    </div>
  );
}
