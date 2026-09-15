export function GlobalStyles() {
  return (
    <style>{`
      @keyframes filaUp { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
      @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      .fila-landing ::selection { background: #adcce6; color: #102a45; }
      .fila-landing input::placeholder, .fila-landing textarea::placeholder { color: #80add1; }
      .fila-landing .fila-input:focus { border-color: #457aab; box-shadow: 0 0 0 3px rgba(69,122,171,0.15); }
      .fila-landing .fila-input-dark:focus { border-color: #adcce6; box-shadow: 0 0 0 3px rgba(173,204,230,0.2); }
      .fila-landing .fila-btn:hover { transform: translateY(-1px); box-shadow: 0 9px 24px rgba(36,74,115,0.36); }
      .fila-landing .fila-btn-light:hover { transform: translateY(-1px); background: #c2d9ee; }
      .fila-landing .fila-card:hover { transform: translateY(-6px); box-shadow: 0 16px 36px rgba(16,42,69,0.13); }
      .fila-landing .fila-contact-link:hover { color: #adcce6 !important; }
    `}</style>
  );
}
