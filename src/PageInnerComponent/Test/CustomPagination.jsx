import React from "react";
import { Box, Button } from "@mui/material";
import { GrFormPrevious } from "react-icons/gr";
import { MdNavigateNext } from "react-icons/md";


const CustomPagination = ({ page, totalPages, onChange }) => {
  const pages = [...Array(totalPages).keys()].map((n) => n + 1);

  return (
    <Box className="paginationWrapper">
      <Button
        className="paginationBtn"
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
      >
        <GrFormPrevious />

      </Button>

      {pages.map((num) => (
        <Button
          key={num}
          className={`paginationNum ${page === num ? "activePage" : ""}`}
          onClick={() => onChange(num)}
        >
          {num}
        </Button>
      ))}

      <Button
        className="paginationBtn"
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
      >
        <MdNavigateNext />

      </Button>
    </Box>
  );
};

export default CustomPagination;
