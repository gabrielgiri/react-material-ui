import React from 'react';
import { Container, Grid, Card, CardMedia, Typography } from '@mui/material';

function Images() {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Imágenes aleatorias (picsum.photos)
      </Typography>
      <Grid container spacing={2}>
        {[300, 301, 302].map((w, idx) => (
          <Grid item xs={12} sm={6} md={4} key={idx}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={`https://picsum.photos/${w}/200?random=${idx}`}
                alt={`Random ${idx}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Images;
