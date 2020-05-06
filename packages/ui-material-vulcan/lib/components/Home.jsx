import React from 'react';
import { registerComponent } from 'meteor/vulcan:core';

const Home = () => (
  <React.Fragment>
    <h1>UI Material Vulcan Starter</h1>
    <a href={"https://github.com/Neobii/UI-Material-Vulcan-Starter.git"}>Github</a>
  </React.Fragment>
)

registerComponent({ name: 'Home', component: Home});