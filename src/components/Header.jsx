import React from "react";
import { Typography, Container, Box, Avatar } from "@mui/material";
import AppBarComponents from './HeaderComponents/AppBarComponents';
import Button from '@mui/material/Button';
import CardComponents from "./HeaderComponents/CardComponents";
import profile from "../assets/profile.jpg"

export default function Header() {
  return (
    <div id="home">

      <Box
        sx={{
          background: "linear-gradient(to right, #4f46e5, #9333ea)",
          color: "white",
          py: 8,
          mb: 5,
          mt: 6,
        }}
        >
        <Container
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row-reverse" },
            justifyContent: "space-around",
            alignItems: "center",
            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Profile Image */}
          <Avatar
            alt="Profile"
            src={profile}
            sx={{
              width: 200,
              height: 200,
              border: "4px solid white",
              mb: { xs: 3, md: 0 },
            }}
          />

          {/* Text Content */}
          <Box>
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Hi, I'm Thwe Zin Nyein
            </Typography>
            <Typography variant="h5" gutterBottom>
              Web Developer
            </Typography>
            <Typography variant="h6" gutterBottom>
              Passionate about building interactive applications with React.
            </Typography>
            <Button
              variant="contained"
              href="#"
              sx={{ my: 2, backgroundColor: 'white', color: '#4f46e5', fontWeight: 'bold' }}
            >
              Contact Me
            </Button>
          </Box>
        </Container>
      </Box>

        <CardComponents/>
    </div>
  );
}
