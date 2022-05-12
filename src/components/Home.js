import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import Tarjeta from "./Tarjeta";
import Paginado from "./Paginado";

const Home = () => {
  const [results, setResults] = useState([]);
  const [maxPages, setMaxPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setMaxPages(data.info.pages);
        setResults(data.results);
        return data.results;
      })
      .then((response) => {
        currentPage === 42 &&
          setResults([
            ...response,
            {
              image:
                "https://www.hola.com/imagenes/mascotas/20200911175064/gatos-imagenes-curiosidades/0-864-5/gato-egipcio-a.webp?filter=high",
              //name: "Pedro",
              status: "Alive",
              species: "Cat",
              gender: "Male",
            },
          ]);
      });
  }, [currentPage]);

  return (
    <>
      <h1>Las mejores tarjetas de personaje ✨</h1>
      <Grid container spacing={2}>
        {results.map((personaje) => (
          <Grid key={personaje.id} item>
            <Tarjeta {...personaje} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ marginLeft: 50, marginTop: 10, marginBottom: 5 }}>
        <Paginado
          count={maxPages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Box>
    </>
  );
};

export default Home;
