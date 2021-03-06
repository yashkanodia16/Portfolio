import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import "./About.css";
import "../../assets/CSS/main.css";
import ButtonBar from "./ButtonBar";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },

  button: {
    margin: theme.spacing(1),
    flex: "0 0 100px",
  },
  line: {
    flexDirection: "row",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div className="about">
      <div className="row">
        <div className="left_column">
          <p
            id="About"
            className="heading"
            style={{ fontFamily: "Roboto Slab" }}
          >
            About
          </p>
          <div className="text">
            <div className="about-flex">
              <div className="right_column">
                <div className="picture">
                  <img
                    alt="Yash Kanodia"
                    src="https://avatars0.githubusercontent.com/u/55005566?v=4"
                    className="profile"
                    variant="rounded"
                  />
                </div>
              </div>
              <div>
                <div className="about-content">
                  <b>Hello!</b> My name is Yash Kanodia, and I am a graduate
                  Student at University of North Carolina at Charlotte, majoring
                  in Computer Science. I have solid understanding of Agile,
                  Relational and NoSQL databases. I have strong understanding of
                  Data Structures and Algorithms. I am a well-organized person
                  with good interpersonal skills and high work ethics. I am a
                  Graduate Teaching Assistant at UNCC for Logics and Algorithms.
                  I have hands-on experience in developing scalable cross
                  browser web Applications. I will be graduating in Fall 2021
                  and looking for Full-time opportunities. In my free time, I
                  enjoy watching and playing sports.
                </div>
                <br />
                <ButtonBar />
                <br />
              </div>
            </div>
            <Divider />
          </div>
        </div>
      </div>
    </div>
  );
}
