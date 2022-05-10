import React, { useState, useEffect } from "react";
import "./App.css";
import Tarjeta from "./components/Tarjeta";
const axios = require("axios");

function App() {
  const [respuestaAPI, setRespuestaAPI] = useState([]);

  useEffect(() => {
    const consultaAPI = async () => {
      const consulta = await axios.get(
        "https://rickandmortyapi.com/api/character"
      );

      setRespuestaAPI(consulta);
    };

    consultaAPI();
  }, []);
  console.log(respuestaAPI.data.results);

  return (
    <div className="App">
      <h1>soy la app</h1>
      <Tarjeta datos={respuestaAPI} />
    </div>
  );
}

export default App;
