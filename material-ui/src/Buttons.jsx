import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import ButtonGroup from '@mui/material/ButtonGroup';
import { withStyles } from '@mui/styles';
import './GlobalCssButton.css';

const StyledButton = withStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    height: 48,
    padding: '0 30px',
    margin: '100px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  },
  label: {
    textTransform: 'capitalize',
  },
})(Button);

function Buttons() {
  return (
    <Container fixed>
      <div>
        <h1>Material UI - React</h1>
        <h2>Buttons</h2>

        <Box>
          <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">Primary</Button>
          <Button variant="contained" color="secondary">Secondary</Button>
          <Button variant="contained" disabled>Disabled</Button>
          <Button variant="contained" color="primary" href="#contained-buttons">Link</Button>
        </Box>

        <Box>
          <Button variant="text">Default variant text</Button>
          <Button variant="text" color="success">Success variant text</Button>
          <Button variant="text" color="secondary">Secondary variant text</Button>
          <Button variant="text" disabled>Disabled variant text</Button>
          <Button variant="text" color="primary" href="#contained-buttons">Button primary Link</Button>
        </Box>

        <Box>
          <Button variant="outlined">Default</Button>
          <Button variant="outlined" color="primary">Primary outlined</Button>
          <Button variant="outlined" color="secondary">Secondary outlined</Button>
          <Button variant="outlined" disabled>Disabled outlined</Button>
        </Box>

        <Box>
          <Button variant="contained" color="primary" fullWidth>
            FullWidth size button
          </Button>
        </Box>

        <Box>
          <Button variant="contained" color="secondary" size="small">small size button</Button>
          <Button variant="contained" color="secondary" size="medium">medium size button</Button>
          <Button variant="contained" color="secondary" size="large">large size button</Button>
        </Box>

        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>

        <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>

        <ButtonGroup variant="text" color="primary" aria-label="text primary button group">
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>

        <Box>
          <Button
            style={{
              borderRadius: 25,
              backgroundColor: "#21b6ae",
              padding: "12px 36px",
              fontSize: "14px"
            }}
            variant="contained"
          >
            Custom Button
          </Button>
        </Box>

        <Box>
          <StyledButton variant="contained">StyledButton</StyledButton>
        </Box>
      </div>
    </Container>
  );
}

export default Buttons;
