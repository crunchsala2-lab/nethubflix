import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Redireciona mantendo os parâmetros da URL (ex: ?hash=)
    window.location.replace("/index.html" + window.location.search);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        height: "100vh",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h2>Redirecionando...</h2>
    </div>
  );
}
