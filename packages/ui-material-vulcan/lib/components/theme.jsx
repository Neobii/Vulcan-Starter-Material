
import { registerSetting } from "meteor/vulcan:core";
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

import {
  registerTheme
  //getCurrentTheme
} from "meteor/vulcan:ui-material";

const theme = {
  overrides: {
    // Name of the component ⚛️ / style sheet
    MuiButton: {
      root: {
        padding: 15
      }
    },
    MuiFormControl: {
      // Name of the rule
      //variant: "outlined"
    },
  },
  useNextVariants: true,
  palette: {
    primary: purple,
    secondary: {
      main: '#f44336',
    },
  },
  /*palette: {
    primary: {
      main: "#FCAD1C",
    },
    secondary: {
      main: "#FADA16",
    },
    color1: "#FCAD1C",
    color2: "#FADA16",
    error: "#F44A07"
  },*/
  utils: {
    tooltipEnterDelay: 700,

    errorMessage: {
      textAlign: "center",
      backgroundColor: purple,
      color: red,
      borderRadius: "4px",
      fontWeight: "bold"
    },

    denseTable: {
      "& > thead > tr > th, & > tbody > tr > td": {
        padding: "4px 16px 4px 16px"
      },
      "& > thead > tr > th:last-child, & > tbody > tr > td:last-child": {
        paddingRight: "16px"
      }
    },

    flatTable: {
      "& > thead > tr > th, & > tbody > tr > td": {
        padding: "4px 16px 4px 16px"
      },
      "& > thead > tr > th:last-child, & > tbody > tr > td:last-child": {
        paddingRight: "16px"
      }
    },

    denserTable: {
      "& > thead > tr, & > tbody > tr": {
        height: "40px"
      },
      "& > thead > tr > th, & > tbody > tr > td": {
        padding: "4px 8px 4px 8px"
      },
      "& > thead > tr > th:last-child, & > tbody > tr > td:last-child": {
        paddingRight: "16px"
      }
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "Tahoma"
    ].join(','),
    body2: {
      color: red
    },
  },
  shape: {
    borderRadius: 2
  },
  shadows: ["none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none","none"]
}

registerTheme("MaterialUIStarter", theme);
registerSetting("muiTheme", "MaterialUIStarter");