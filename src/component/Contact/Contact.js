import React, { PureComponent } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const styles = (theme) => ({
  container: {
    margin: 0,
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    paddingBottom: 15,
    flexGrow: 1,
  },
  button: {
    backgroundColor: "black",
    "backgroundColor::hover": "black",
    color: "white",
    marginTop: 20,
    marginBottom: 20,
  },
  heading: {
    fontFamily: "Sans-Serif",
    textAlign: "center",
  },
});

class ContactForm extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div style={{ marginBottom: "2rem" }}>
        <Container maxWidth="sm">
          <Paper className={classes.container}>
            <form method="post" action="https://formspree.io/maypbkla">
              <Grid container direction="column" spacing={0} justify="center">
                <h2
                  id="Contact"
                  style={{ marginBottom: 0, fontFamily: "Roboto Slab" }}
                >
                  Contact Me
                </h2>
                <TextField
                  id="name"
                  label="NAME"
                  margin="normal"
                  name="name"
                  required
                />
                <TextField
                  id="email"
                  label="EMAIL"
                  margin="normal"
                  name="email"
                  type="email"
                  required
                />
                <TextField
                  id="subject"
                  label="SUBJECT"
                  margin="normal"
                  name="subject"
                  required
                />
                <TextField
                  id="message"
                  label="MESSAGE"
                  margin="normal"
                  name="message"
                  multiline
                  rowsMax="4"
                  required
                />
                <div>
                  <Button
                    variant="contained"
                    color="primary"
                    type="submit"
                    className={classes.button}
                  >
                    SEND
                  </Button>
                </div>
              </Grid>
            </form>
          </Paper>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(ContactForm);
