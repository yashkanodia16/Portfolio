import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Divider,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "93.5%",
    paddingLeft: "1.5%",
  },
  panel: {
    backgroundColor: "#000000",
  },
  icon: {
    color: theme.palette.common.white,
  },
  date: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.common.white,
    marginRight: 0,
    marginLeft: "auto",
  },
  heading: {
    fontFamily: "Sans-Serif",
    textAlign: "center",
  },
}));

export default function Education() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    // style={{ height: "100vh" }}
    <div>
      <div className={classes.root}>
        <h1 id="Education" className={classes.heading}>
          Education
        </h1>
        <ExpansionPanel
          expanded={expanded === "panel1"}
          onChange={handleChange("panel1")}
        >
          <ExpansionPanelSummary
            className={classes.panel}
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
          >
            <Typography variant="h6" className={classes.icon}>
              University of North Carolina at Charlotte
            </Typography>
            <Typography className={classes.date}>Expected May 2021</Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <Typography>
                Pursuing a Masters in <b>Computer Science</b>
              </Typography>
              <br />
              <Typography>
                <b>Relavant Coursework:</b> ITCS 6114 Data Structures and
                Algorithm, ITCS 6112 Software System Design and Implementation ,
                ITCS 6160 Database Systems, ITIS 5166 Network Based Application
                Development, ITCS 6162 Knowledge Disc in Databases, ITCS 6190
                Cloud Comp for Data Analysis
              </Typography>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <br />
        <ExpansionPanel
          expanded={expanded === "panel2"}
          onChange={handleChange("panel2")}
        >
          <ExpansionPanelSummary
            className={classes.panel}
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
          >
            <Typography variant="h6" className={classes.icon}>
              Thakur College of Engineering and Technology, University of Mumbai
            </Typography>
            <Typography className={classes.date}>
              August 2015 - May 2019
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <Typography>
                Bachelor's of Engineering in Information Technology
              </Typography>
              <br />
              <Typography>
                <b>Relavant Coursework:</b> Algorithms and Data Structures,
                Database Systems, Object Oriented Programming Methodology,
                Applied Mathematics, Web Programming, Automata Theory, Operating
                Systems, Open Source Technologies, Software Engineering, Systems
                and Web Security, Data Mining
              </Typography>
              <br />
              <Typography>
                <b>Activities:</b> Samarpan Seva Charitable Trust, Captain of
                Table Tennis Team, Winner of Enertia - Inter Collegiate
                Tournament in Table Tennis
              </Typography>
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
        <br />
        <ExpansionPanel
          expanded={expanded === "panel3"}
          onChange={handleChange("panel3")}
        >
          <ExpansionPanelSummary
            className={classes.panel}
            expandIcon={<ExpandMoreIcon className={classes.icon} />}
          >
            <Typography variant="h6" className={classes.icon}>
              Mithibai College
            </Typography>
            <Typography className={classes.date}>
              August 2013 - May 2015
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div>
              <Typography>High School Education</Typography>
              <br />
              <Typography>
                <b>Relavant Coursework:</b> Mathematics, Physics Computer
                Science, Chemistry, English, Biology
              </Typography>
              <br />
            </div>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      </div>
      <br />
      <br />
      <Divider />
      <br />
    </div>
  );
}
