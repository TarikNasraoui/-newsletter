import React from 'react';
import { Box, Grid, Typography } from '@mui/material';

const Hero = () => {
  return (
    <Grid container>
      <Grid
        item
        md={12}
      >
        <Box
          sx={{
            position: 'relative',
            textAlign: 'center',
            p: { xs: 3, md: 6 },
            backgroundColor: '#F4F4F4',
            borderRadius: '10px',
          }}
        >
          <Typography
            component="h1"
            variant="h3"
            color="inherit"
            gutterBottom
          >
            NEWSLETTERS
          </Typography>
          <Typography
            variant="body1"
            color="inherit"
            paragraph
          >
            Dans cette page, vous retrouvez l’ensemble des newsletters des Echos et des marques satellites. Ainsi, vous pouvez découvrir
            toutes nos newsletters selon vos centres d’intérêt et gérer plus facilement l’inscription à vos newsletters.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Hero;
