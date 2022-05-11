import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import "./App.css";
import Tarjeta from "./components/Tarjeta";

function App() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) =>  response.json())
      .then((data) => setResults(data.results));
  }, []);

  return (
    <Container className="App" fixed>
      <h1>Las mejores tarjetas de personaje ✨</h1>
      <Grid container spacing={2}>
        {
          results.map((personaje) =>
            <Grid item>
              <Tarjeta {...personaje} />
            </Grid>
          )
        }
      </Grid>
    </Container>
  );
}

export default App;
