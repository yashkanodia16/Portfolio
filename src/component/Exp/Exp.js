import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import LaptopMacIcon from "@material-ui/icons/LaptopMac";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import SchoolIcon from "@material-ui/icons/School";
import ChildCareIcon from "@material-ui/icons/ChildCare";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: "6px 16px",
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  heading: {
    fontFamily: "Sans-Serif",
    textAlign: "center",
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <div>
      <div>
        <h1 id="Experience" className={classes.heading}>
          Experience
        </h1>
        <Timeline align="alternate">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                Jun 2020 - Present
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot>
                <SchoolIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h5" component="h1">
                  University of North Carolina at Charlotte
                </Typography>
                <Typography variant="h6">Teaching Assistant</Typography>
                <Typography variant="h7">
                  Teaching assistant for ITCS 2175 Logic and Algorithms.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                June 2018 - Aug 2018
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h5" component="h1">
                  Ganyt Ecommerce Solutions Pvt Ltd.
                </Typography>
                <Typography variant="h6">Web Development Intern</Typography>
                <Typography variant="h7">
                  Responsible for developing user-friendly interface to easily
                  navigate the web application in HTML and JavaScript.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                June 2017 - Jul 2017
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <DeveloperModeIcon />
              </TimelineDot>
              <TimelineConnector className={classes.secondaryTail} />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h5" component="h1">
                  Sammey INC
                </Typography>
                <Typography variant="h6">Web Development Intern</Typography>
                <Typography variant="h7">
                  Responsible for developing front-end UI for web applications
                  as per the requirements of company's client, with regular
                  updates and modifications as and when required.
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                16 September 1997
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="secondary">
                <ChildCareIcon />
              </TimelineDot>
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={3} className={classes.paper}>
                <Typography variant="h6" component="h1">
                  Born
                </Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
        <br />
        <Divider />
        <br />
      </div>
    </div>
  );
}
