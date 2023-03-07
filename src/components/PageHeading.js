import { Box } from "@mui/material";
import React from "react";

function PageHeading({ text }) {
  return (
    <>
      {/* page heading  */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <h1 style={{ fontSize: "27px", color: "var(--primary)" }}>{text}</h1>
        
      </Box>
    </>
  );
}

export default PageHeading;
