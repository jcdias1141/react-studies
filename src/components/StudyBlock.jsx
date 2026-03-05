export function StudyBlock({ title, description, hint, code, children }) {
  return (
    <main className="conteudo" role="main">
      {(title || description || hint) && (
        <section className="study-intro" aria-labelledby={title ? "study-title" : undefined}>
          {title && <h2 id="study-title">{title}</h2>}
          {description && <p className="study-desc">{description}</p>}
          {hint && (
            <div className="study-hint" aria-label="Dica para fixação">
              {hint.split("\n\n").map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          )}
        </section>
      )}
      {code && (
        <section className="study-code" aria-label="Exemplo de código">
          <h3>Código</h3>
          <pre><code>{code}</code></pre>
        </section>
      )}
      {children && (
        <section className="study-demo" aria-label="Resultado ao vivo">
          <h3>Resultado</h3>
          <div className="study-demo-box">{children}</div>
        </section>
      )}
    </main>
  );
}
