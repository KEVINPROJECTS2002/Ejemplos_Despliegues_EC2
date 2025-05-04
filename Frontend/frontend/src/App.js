import { useEffect, useState } from "react";

function App() {
  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/mensaje")
      .then((res) => res.json())
      .then((data) => setMensaje(data.mensaje));
  }, []);

  return (
    <div>
      <h1>{mensaje || "Cargando..."}</h1>
    </div>
  );
}

export default App;
