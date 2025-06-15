import React from "react";
import { Grid, Typography, Card, CardContent, Box } from "@mui/material";
import { Avatar } from '@mui/material';

const skills = [
  "HTML", "CSS", "Bootstrap",
  "JavaScript", "React", "Material UI",
  "PHP", "Sql",
];

export default function SkillsSection() {
  return (
    <div id="skills" >
    
    <Box sx={{ py: 10, backgroundColor: "#f7fafc" }}>
      <Typography variant="h4" align="center" gutterBottom sx={{mb: 4}}>
        My Skills & Tools 
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        {skills.map(skill => (
          <Grid item xs={4} sm={2} key={skill}>
            <Card>
              <CardContent>
                <Typography align="center">{skill}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
    </div>
  );
}





