import React from 'react';
import PropTypes from 'prop-types';
import { Components,  replaceComponent } from 'meteor/vulcan:core';
import Box from '@material-ui/core/Box';
import NoSsr from '@material-ui/core/NoSsr';
import withStyles from '@material-ui/core/styles/withStyles';
import classNames from 'classnames';

const styles = theme => {
  return {
    '@global': {
      html: {

      },
      body: {
        margin: 0
      },
      site: {
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh"
      },
      header: {
        display: "flex"
      },
      content: {
        backgroundColor: "orange",
        padding: "15px",
        flex: 1
      },
      footer: {
        backgroundColor: "grey",
        height: "24px",
        padding: "2px",
        textAlign: "right"
      }
    }
  };
}

class MainLayout extends React.Component {
  render = () => {
    const classes = this.props.classes;
    console.log(classes) // {}
    return (
      <React.Fragment>
        <Box className={classes.site}>
          <Box className={classes.header}>
            <h1>Header</h1>
          </Box>
        <Box className={classes.content}>
          { this.props.children }
        </Box>
        <Box className={classes.footer}><a href={"https://github.com/Neobii/UI-Material-Vulcan-Starter.git"}>Github</a></Box>
      </Box>
    </React.Fragment>
    )
  }
}

MainLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.node,
};

MainLayout.displayName = 'MainLayout';

replaceComponent( 'Layout', MainLayout, [withStyles, styles] );