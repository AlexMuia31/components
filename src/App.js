import { Delete } from "@mui/icons-material";
import { Box, Button, Container, TextField } from "@mui/material";
import React from "react";

function App() {
  const [textFields, setTextFields] = React.useState(0);
  const handleTextField = () => {
    setTextFields(textFields + 1);
  };
  return (
    <Container>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <TextField />

        {[...Array(textFields).keys()].map(() => (
          <Box>
            <TextField fullWidth />
            <Delete />
          </Box>
        ))}
        <Button onClick={handleTextField}>ADD TEXT Field</Button>
      </Box>
    </Container>
  );
}

export default App;
