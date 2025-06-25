import React from 'react';
import { makeStyles } from '@mui/styles'; // cambiado
import Grid from '@mui/material/Grid'; // cambiado
import Container from '@mui/material/Container'; // cambiado
import Typography from '@mui/material/Typography'; // cambiado
import Slider from '@mui/material/Slider'; // cambiado
import VolumeDown from '@mui/icons-material/VolumeDown'; // cambiado
import VolumeUp from '@mui/icons-material/VolumeUp'; // cambiado

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

function AppSlider() {

  const classes = useStyles();
  const [value, setValue] = React.useState(30);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container fixed>
    <h2>Slider</h2>
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider value={value} onChange={handleChange} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
      <Typography id="disabled-slider" gutterBottom>
        Disabled slider
      </Typography>
      <Slider disabled defaultValue={30} aria-labelledby="disabled-slider" />
    </div>
    </Container>
  );

}

export default AppSlider;
