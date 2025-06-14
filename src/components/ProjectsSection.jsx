import React from "react";
import { Grid, Typography, Card, CardContent, Button, Box } from "@mui/material";

const projects = [
  { id: 1, title: "Simple Calculator", image: "../../images/simple-calculator.png" },
  { id: 2, title: "Portfolio Site", image: "../../images/portfoliopicture.png" }
];

export default function ProjectsSection() {
  return (
    <Box sx={{ py: 10 }}>
      <Typography variant="h4" align="center" gutterBottom sx={{mb: 4}}>
        My Projects
      </Typography>
      <Grid container spacing={3} justifyContent="center">  
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card>
              <img
                src={project.image}
                alt={project.title}
                style={{ width: "100%" , height: 200, objectFit: "cover" }}
              />
              <CardContent>
                <Typography variant="h6">{project.title}</Typography>
                <Button variant="contained" sx={{ mt: 1 }}>
                  View details
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
