import React from 'react';
import { registerComponent } from 'meteor/vulcan:core';

const Home = () => (
  <React.Fragment>
    <img width="50%" src="/vulcan.jpg"/>
  </React.Fragment>
)

registerComponent({ name: 'Home', component: Home});