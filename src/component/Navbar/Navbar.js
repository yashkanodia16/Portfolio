import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import Grid from "@material-ui/core/Grid";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";

const styles = (theme) => ({
  header: {
    position: "static",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      minHeight: 0,
    },
    [theme.breakpoints.down("sm")]: {
      minHeight: "30px",
    },
  },
  headerBar: {
    backgroundColor: "blue",
    boxShadow: "none",
  },
  headerBarFixed: {
    backgroundColor: "#000000",
    padding: "0.5rem",
    boxShadow:
      "0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);",
  },
  headerBackground: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  flex: {
    flex: 1,
  },
  horizontalNavigation: {
    flex: 1,
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
  verticalNavigation: {
    flex: 1,
    minWidth: 300,
    backgroundColor: "#F5F5F5",
  },
  hamburger: {
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  removeLinkUnderline: {
    textDecoration: "none",
    color: "inherit",
  },
});

export class Header extends Component {
  state = {
    position: "static",
    navigationItemClass: true,
    isDrawerVisible: false,
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll.bind(this));
    this.handleScroll();
  }

  handleScroll() {
    if (ReactDOM.findDOMNode(this).getBoundingClientRect) {
      let rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
      let position = "static";
      let navigationItemClass = false;
      if (rect) {
        if ((rect.y || rect.top) < -45) {
          position = "fixed";
          navigationItemClass = true;
        }
        this.setState({
          position,
          navigationItemClass,
        });
      }
    }
  }

  _showDrawer() {
    this.setState({
      isDrawerVisible: true,
    });
  }

  _hideDrawer() {
    this.setState({
      isDrawerVisible: false,
    });
  }

  render() {
    let displayDrawer;
    if (this.state.navigationItemClass) {
      displayDrawer = "block";
    } else {
      displayDrawer = "none";
    }

    const classes = this.props.classes;
    const { position, navigationItemClass } = this.state;
    const headerClass = classNames({
      [classes.headerBar]: true,
      [classes.headerBarFixed]: position === "fixed",
    });
    return (
      <div className={classes.header} style={{ display: "flex" }}>
        <div className={classes.headerBackground} />
        <AppBar
          position="fixed"
          className={headerClass}
          style={{ display: displayDrawer }}
        >
          <IconButton
            className={classes.hamburger}
            onClick={this._showDrawer.bind(this)}
            aria-label="Menu"
            style={{ color: "white" }}
          >
            <MenuIcon />
          </IconButton>
          <div className={classes.flex}></div>
          <Grid
            className={classes.horizontalNavigation}
            container
            spacing={0}
            direction="row"
          >
            <div style={{ display: "flex" }}>
              <Avatar
                alt="Yash Kanodia"
                src="https://cdn3.vectorstock.com/i/1000x1000/24/02/yk-logo-monogram-with-sword-and-shield-vector-28942402.jpg"
              />
              <Typography
                variant="h6"
                className={classes.title}
                style={{ paddingLeft: "15px", paddingTop: "3px" }}
              >
                YASH KANODIA
              </Typography>
            </div>
            <div style={{ flex: "1" }} />
            <div className="toolbar_navigation-items">
              <Button
                a
                href="https://yashkanodia16.github.io/Resume/"
                color="inherit"
              >
                Resume
              </Button>
              <Button href="#About" color="inherit">
                About
              </Button>
              <Button href="#Experience" color="inherit">
                Experience
              </Button>
              <Button href="#projects" color="inherit">
                Projects
              </Button>
              <Button href="#Skills" color="inherit">
                Skills
              </Button>
              <Button href="#Education" color="inherit">
                Education
              </Button>
              <Button href="#Contact" color="inherit">
                Contact
              </Button>
            </div>
          </Grid>
        </AppBar>
        <Drawer
          anchor="left"
          open={this.state.isDrawerVisible}
          onClose={() => this._hideDrawer()}
        >
          <Grid
            className={classes.verticalNavigation}
            container
            alignItems="center"
            justify="center"
            spacing={0}
            direction="column"
          >
            <ul
              type="none"
              style={{
                fontSize: "23px",
                paddingTop: "0",
              }}
            >
              <li>
                <a
                  href="https://yashkanodia16.github.io/Resume/"
                  className={classes.removeLinkUnderline}
                >
                  <b>Resume</b>
                </a>
              </li>
              <br></br>
              <li>
                <a href="#About" className={classes.removeLinkUnderline}>
                  <b>About</b>
                </a>
              </li>
              <br></br>
              <li>
                <a href="#Experience" className={classes.removeLinkUnderline}>
                  <b>Experience</b>
                </a>
              </li>
              <br></br>
              <li>
                <a href="#projects" className={classes.removeLinkUnderline}>
                  <b>Projects</b>
                </a>
              </li>
              <br></br>
              <li>
                <a href="#Skills" className={classes.removeLinkUnderline}>
                  <b>Skills</b>
                </a>
              </li>
              <br></br>
              <li>
                <a href="#Education" className={classes.removeLinkUnderline}>
                  <b>Education</b>
                </a>
              </li>
              <br></br>
              <li>
                <a href="#Contact" className={classes.removeLinkUnderline}>
                  <b>Contact</b>
                </a>
              </li>
            </ul>
          </Grid>
        </Drawer>
      </div>
    );
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(Header);
