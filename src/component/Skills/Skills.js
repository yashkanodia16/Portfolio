import React from "react";

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import { Typography, Divider } from "@material-ui/core";
import ProgressBar from "react-bootstrap/ProgressBar";
import LinearProgress from "@material-ui/core/LinearProgress";
import styles from "./Skills.module.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 5,
    borderRadius: 5,
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#000000",
  },
}))(LinearProgress);

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  header: {
    backgroundColor: theme.palette.primary.main,
  },
  white: {
    color: theme.palette.common.white,
  },
  heading: {
    fontFamily: "Sans-Serif",
    textAlign: "center",
  },
}));

function Panel({ header, array }) {
  const classes = useStyles();

  return (
    // style={{ height: "100vh" }}
    <div className={styles.column}>
      <div>
        <h1 id="Skills" className={classes.heading}>
          Skills
        </h1>
      </div>
      <ExpansionPanel expanded={true} className={classes.root}>
        <ExpansionPanelSummary
          className={classes.header}
          style={{ backgroundColor: "#000000" }}
        >
          <Typography variant="h6" className={classes.white}>
            {header}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={styles.row}>
          {array.map((data) => {
            return (
              <div className={styles.max_width}>
                <div className={styles.left_column}>
                  <Typography variant="h6">{data.name}</Typography>
                </div>
                <div className={styles.right_column}>
                  <ProgressBar animated now={data.score}>
                    <BorderLinearProgress
                      variant="determinate"
                      value={data.score}
                    />
                  </ProgressBar>
                </div>
              </div>
            );
          })}
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <br />
      <Divider />
      <br />
    </div>
  );
}

export default function Skills() {
  const languages = [
    { name: "Java", score: 85 },
    { name: "HTML/CSS", score: 90 },
    { name: "C/C++", score: 70 },
    { name: "Javascript", score: 75 },
    { name: "SQL", score: 80 },
  ];
  const frameworks = [
    { name: "Node.js", score: 80 },
    { name: "ReactJS", score: 70 },
    { name: "Bootstrap", score: 80 },
    { name: "Material UI", score: 70 },
    { name: "Android", score: 75 },
  ];

  return (
    <div className={styles.row}>
      <Panel header="Programming Languages" array={languages} />
      <Panel header="Libraries/Frameworks" array={frameworks} />
    </div>
  );
}
