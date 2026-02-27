import { useState } from "react";

export function BotaoCurtir() {
  const [curtido, setCurtido] = useState(false);

  return (
    <>
      {/* Quando clica: pega o valor atual (curtido), vira do avesso (!curtido) e guarda de volta. Era false vira true, era true vira false. */}
      <button onClick={() => setCurtido(!curtido)}>
        {curtido ? "❤️ Curtido" : "🤍 Curtir"}
      </button>
    </>
  );
}
