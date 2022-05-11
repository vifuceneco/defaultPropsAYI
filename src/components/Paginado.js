import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const Paginado = ({
  count,
  setCurrentPage,
  currentPage,
}) => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={count}
        variant="outlined"
        color="primary"
        size="large"
        page={currentPage}
        onChange={(e, value) => setCurrentPage(value)}
      />
    </Stack>
  );
};

Paginado.defaultProps = {
  count: 0,
  currentPage: 1,
  setCurrentPage: () => {},
}

export default Paginado;
