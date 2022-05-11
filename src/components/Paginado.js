import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Paginado = ({
  charactersPerPage,
  totalCharacters,
  setCurrentPage,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalCharacters / charactersPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleChange = (event, value) => {
    setCurrentPage(value);
  };

  return (
    <div>
      <Stack spacing={2}>
        <Pagination
          count={pageNumbers.length}
          variant="outlined"
          color="primary"
          size="large"
          page={currentPage}
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default Paginado;
