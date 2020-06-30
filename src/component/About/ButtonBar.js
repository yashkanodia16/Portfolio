import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button } from "@material-ui/core";
import "./About.css";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    flex: "0 0 100px",
  },
}));

function ButtonBar() {
  const classes = useStyles();
  return (
    <div className="buttons">
      <Button
        variant="outlined"
        className={classes.button}
        href="https://github.com/yashkanodia16"
        target="_blank"
      >
        <Typography>Github</Typography>
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        href="https://www.linkedin.com/in/yashkanodia16/"
        target="_blank"
      >
        <Typography>LinkedIn</Typography>
      </Button>
      <Button
        variant="outlined"
        className={classes.button}
        href="https://yashkanodia16.github.io/Resume/"
        target="_blank"
      >
        <Typography>Resume</Typography>
      </Button>
    </div>
  );
}

export default ButtonBar;
