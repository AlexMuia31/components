import { Box, Button, TextField } from "@mui/material";
import React from "react";

function App() {
  const [textFields, setTextFields] = React.useState(0);
  const handleTextField = () => {
    setTextFields(textFields + 1);
  };
  return (
    <Box>
      <TextField />
      {[...Array(textFields).keys()].map(() => (
        <TextField />
      ))}
      <Button onClick={handleTextField}>ADD TEXT Field</Button>
    </Box>
  );
}

export default App;
