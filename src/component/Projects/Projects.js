import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import reactImage from "../../assets/images/react.png";
import javascriptImage from "../../assets/images/javascript.png";
import nodejsImage from "../../assets/images/nodejs.png";
import androidImage from "../../assets/images/android.png";
import leetcodeImage from "../../assets/images/leetcode.png";
import Divider from "@material-ui/core/Divider";

const cardStyle = {
  margin: "25px",
};

class Projects extends Component {
  render() {
    return (
      <div>
        <Grid
          container
          spacing={40}
          justify="center"
          alignItems="center"
          direction="row"
          id="projects"
        >
          <Grid item xs={12}>
            <h1 style={{ textAlign: "center" }} id="projects">
              Projects
            </h1>
          </Grid>
          <Grid item xs="auto" style={cardStyle}>
            <Card elevation={5} style={{ width: "250px" }}>
              <CardActionArea
                href="https://findergithubprofile1234567.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <CardMedia
                  style={{ height: "100px", width: "100%" }}
                  image={reactImage}
                  title="React"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ fontFamily: "Roboto Slam" }}
                  >
                    <b>Github Finder</b>
                  </Typography>

                  <Typography
                    component="p"
                    style={{ fontFamily: "Roboto Slam" }}
                  >
                    Github Finder searches for all the Github users using the
                    text inputted by the user in the form. It returns all the
                    users matching the string in a grid format.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  color="primary-dark"
                  href="https://findergithubprofile1234567.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: "Roboto Slam" }}
                >
                  Netlify
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary-dark"
                  href="https://github.com/yashkanodia16/Github-Finder"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: "Roboto Slam" }}
                >
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs="auto" style={cardStyle}>
            <Card elevation={5} style={{ width: "250px" }}>
              <CardActionArea
                href="https://yashkanodia16.github.io/budgety/"
                target="_blank"
              >
                <CardMedia
                  style={{ height: "100px", width: "100%" }}
                  image={javascriptImage}
                  title="JavaScript"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ fontFamily: "Roboto Slam" }}
                  >
                    <b> Budgety </b>
                  </Typography>

                  <Typography
                    component="p"
                    style={{ fontFamily: "Roboto Slam" }}
                  >
                    Budgety is a simple budget tracker app. It allows user to
                    input incomes & expenses and see how the budget changes due
                    to custom insertions.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  color="primary-dark"
                  href="https://github.com/yashkanodia16/budgety"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: "Roboto Slam" }}
                >
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs="auto" style={cardStyle}>
            <Card elevation={5} style={{ width: "250px" }}>
              <CardActionArea target="_blank">
                <CardMedia
                  style={{ height: "100px", width: "100%" }}
                  image={nodejsImage}
                  title="NodeJS"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ fontFamily: "Roboto Slam" }}
                  >
                    <b>Meet-up Soccer</b>
                  </Typography>

                  <Typography
                    component="p"
                    style={{ fontFamily: "Roboto Slam" }}
                  >
                    Developed web-based artifacts to render Soccer events in the
                    form of connections, user can login and can also create a
                    new event.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  color="primary-dark"
                  href="https://github.com/yashkanodia16/Network-Based-Application-Development"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: "Roboto Slam" }}
                >
                  GitHub
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs="auto" style={cardStyle}>
            <Card elevation={5} style={{ width: "250px" }}>
              <CardActionArea target="_blank">
                <CardMedia
                  style={{ height: "100px", width: "100%" }}
                  image={androidImage}
                  title="Android"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ fontFamily: "Roboto Slam" }}
                  >
                    <b>TCET Kiosk</b>
                  </Typography>
                  <Typography
                    component="p"
                    style={{ fontFamily: "Roboto Slam" }}
                  >
                    This system is used to automate the generation of letters
                    where anyone who had the app could interact with the admin
                    using an appropriate formal letter format.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  color="primary-dark"
                  href="https://github.com/yashkanodia16/TCET-Kiosk-System"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: "Roboto Slam" }}
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs="auto" style={cardStyle}>
            <Card elevation={5} style={{ width: "250px" }}>
              <CardActionArea
                href="https://yashkanodia16.github.io/Forkify/dist/"
                target="_blank"
              >
                <CardMedia
                  style={{ height: "100px", width: "100%" }}
                  image={javascriptImage}
                  title="JavaScript"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ fontFamily: "Roboto Slam" }}
                  >
                    <b>Forkify</b>
                  </Typography>
                  <Typography
                    component="p"
                    style={{ fontFamily: "Roboto Slam" }}
                  >
                    Forkify is a web application for beginner cooks and kitchen
                    hobbyists to search and save their favorite recipes. It is a
                    MVC app that calls the food2fork API to show recipes.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  color="primary-dark"
                  href="https://github.com/yashkanodia16/Forkify"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: "Roboto Slam" }}
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs="auto" style={cardStyle}>
            <Card elevation={5} style={{ width: "250px" }}>
              <CardActionArea
                href="https://yashkanodia16.github.io/pig-game/"
                target="_blank"
              >
                <CardMedia
                  style={{ height: "100px", width: "100%" }}
                  image={javascriptImage}
                  title="JavaScript"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ fontFamily: "Roboto Slam" }}
                  >
                    <b> Pig Game </b>
                  </Typography>
                  <Typography
                    component="p"
                    style={{ fontFamily: "Roboto Slam" }}
                  >
                    Developed a game in which player rolls a dice and if the
                    player rolls a 1, they score nothing and it becomes the next
                    player's turn. The first player to score set points wins.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  color="primary-dark"
                  href="https://github.com/yashkanodia16/pig-game"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: "Roboto Slam" }}
                >
                  Github
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs="auto" style={{ margin: "25px" }}>
            <Card elevation={5} style={{ width: "250px" }}>
              <CardActionArea target="_blank">
                <CardMedia
                  style={{ height: "100px", width: "100%" }}
                  image={leetcodeImage}
                  title="Leetcode"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    style={{ fontFamily: "Roboto Slam" }}
                  >
                    <b>Leetcode</b>
                  </Typography>
                  <Typography
                    component="p"
                    style={{ fontFamily: "Roboto Slam" }}
                  >
                    I have solved many problems on Leetcode using Java. There
                    are 800+ questions (and growing), each with multiple
                    solutions. Questions are ranked by: easy, medium, and hard.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button
                  variant="contained"
                  size="small"
                  color="primary-dark"
                  href="https://github.com/yashkanodia16/Leetcode_Easy"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: "Roboto Slam" }}
                >
                  Easy
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary-dark"
                  href="https://github.com/yashkanodia16/leetcode-Medium"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: "Roboto Slam" }}
                >
                  Medium
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  color="primary-dark"
                  href="https://github.com/yashkanodia16/Leetcode_Hard"
                  target="_blank"
                  rel="noreferrer"
                  style={{ fontFamily: "Roboto Slam" }}
                >
                  Hard
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
        <br></br>
        <Divider />
        <br></br>
      </div>
    );
  }
}

export default Projects;
