import React, { useState, useEffect } from "react";
import "./App.css";
import Tarjeta from "./components/Tarjeta";
const axios = require("axios");

function App() {
  const [respuestaAPI, setRespuestaAPI] = useState([]);

  useEffect(() => {
    const consultaAPI = async () => {
      await fetch("https://rickandmortyapi.com/api/character")
        .then((r) => r.json())
        .then((r) => setRespuestaAPI(r));

      //setRespuestaAPI(consulta.json());
    };

    consultaAPI();
  }, []);
  //console.log(respuestaAPI);

  return (
    <div className="App">
      <h1>Las mejores tarjetas de personaje ✨</h1>
      <Tarjeta datos={respuestaAPI.results} />
    </div>
  );
}

export default App;
