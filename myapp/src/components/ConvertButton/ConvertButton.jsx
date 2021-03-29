import React from "react";
import Box from '@material-ui/core/Box';
import "./ConvertButton.css";

// This generates a button with a specific style used on the ConvertUnitsPage

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
