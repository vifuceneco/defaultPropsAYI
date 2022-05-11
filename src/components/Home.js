import React, { useState, useEffect } from "react";
import { Grid, Box } from "@mui/material";
import Tarjeta from "./Tarjeta";
import Paginado from "./Paginado";

const Home = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setResults(data.results));
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const charactersPerPage = 8;
  const indexOfLastCharacter = charactersPerPage * currentPage;
  const indexOfFirstCharacter = indexOfLastCharacter - charactersPerPage;
  const currentCharacters = results.slice(
    indexOfFirstCharacter,
    indexOfLastCharacter
  );

  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <>
      <h1>Las mejores tarjetas de personaje ✨</h1>
      <Grid container spacing={2}>
        {currentCharacters.map((personaje, index) => (
          <Grid key={index} item>
            <Tarjeta {...personaje} />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ marginLeft: 50, marginTop: 10, marginBottom: 5 }}>
        <Paginado
          charactersPerPage={charactersPerPage}
          totalCharacters={results.length}
          paginado={paginado}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Box>
    </>
  );
};

export default Home;
