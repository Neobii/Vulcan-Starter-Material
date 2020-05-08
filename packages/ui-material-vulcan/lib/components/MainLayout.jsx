import React from 'react';
import { Components, registerComponent, replaceComponent } from 'meteor/vulcan:core';
import Box from '@material-ui/core/Box';

const MainLayout = ({ children }) => (
  <React.Fragment>
    <Box style={{display: "flex", flexDirection: "column", minHeight: "100vh"}}>
      <Box style={{backgroundColor: "pink", padding: "15px"}}>
        <h1>Header</h1>
      </Box>
    <Box flex={1} style={{backgroundColor: "rgb(25, 138, 0)", padding: "15px"}}>
      { children }
    </Box>
    <Box style={{backgroundColor: "grey", height: "20px"}}></Box>
    </Box>
  </React.Fragment>
)

registerComponent({ name: 'MainLayout', component: MainLayout });

replaceComponent('Layout', MainLayout);