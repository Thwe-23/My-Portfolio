import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#1a202c", color: "#fff", py: 3, mt: 6 }}>
      <Container>
        <Typography variant="body2" align="center">
          © 2025 . All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
