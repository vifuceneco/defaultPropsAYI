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
<<<<<<< HEAD
      <h1>soy la app</h1>
      <Tarjeta datos={respuestaAPI.results} />
=======
      <h1>Las mejores tarjetas de personaje ✨</h1>
      <Tarjeta datos={respuestaAPI.data.results} />
>>>>>>> 15cf60d5d3dce9cc0caccf8d6f1da30835fa7f0c
    </div>
  );
}

export default App;
