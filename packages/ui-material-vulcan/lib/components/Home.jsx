import React from 'react';
import { registerComponent } from 'meteor/vulcan:core';

const Home = () => (
  <React.Fragment>
    <a href={"https://github.com/Neobii/UI-Material-Vulcan-Starter.git"}>Github</a>
    <img width="50%" src="/vulcan.jpg"/>
  </React.Fragment>
)

registerComponent({ name: 'Home', component: Home});