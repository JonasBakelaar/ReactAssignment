import React from "react";
import Box from '@material-ui/core/Box';
import "./ConvertButton.css";

// This class creates a card with text on it that can either bring user to the main
// page or you can pass in a function that will run when the user clicks on it

const ConvertButton = ({
  onClick = () => {},
  children,
}) => {
  
  return (
    <React.Fragment>
      <Box className="button" onClick={onClick}>
        {children}
      </Box>
    </React.Fragment>
  );
};
export default ConvertButton;
