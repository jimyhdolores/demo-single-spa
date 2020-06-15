import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [saludo, setSaludo] = useState("");
  const [respuesta, setRespuesta] = useState("");

  useEffect(() => {
    window.addEventListener("mensaje", (evt: CustomEvent) => {
      console.log("mensaje--------- ", evt.detail.saludo);
      setSaludo(evt.detail.saludo);
    });
  });

  function handleInputChange(event) {
    setRespuesta(event.target.value);
  }

  function enviarMensaje() {
    var evento = new CustomEvent("respuesta", {
      detail: { respuesta: respuesta },
    });
    window.dispatchEvent(evento);
  }

  return (
    <React.StrictMode>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>{saludo}</h1>
          <input type="text" onChange={(e) => handleInputChange(e)}></input>
          <button onClick={enviarMensaje}>responder</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </React.StrictMode>
  );
}

export default App;
