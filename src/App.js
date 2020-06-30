import React from "react";
import Navbar from "./component/Navbar/Navbar";
import About from "./component/About/About";
import Header from "./component/Header/Header";
import Skills from "./component/Skills/Skills";
import Experience from "./component/Exp/Exp";
import Education from "./component/Education/Educations";
import Drawer from "./component/Navbar/sideDrawer/SideDrawer";
import Backdrop from "./component/Navbar/Backdrop/Backdrop";
import Contact from "./component/Contact/Contact";
import Projects from "./component/Projects/Projects";
import Footer from "./component/Footer/Footer";
import Particles from "./component/Particles/Particles";
import DarkParticlesTheme from "./component/Particles/DarkParticlesTheme";

class App extends React.Component {
  state = {
    sideDrawerOpen: false,
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop click={this.backdropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <Particles
          params={{
            particles: {
              number: {
                value: 50,
              },
              size: {
                value: 3,
              },
            },
            interactivity: {
              events: {
                onhover: {
                  enable: true,
                  mode: "repulse",
                },
              },
            },
          }}
        />
        <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
        <Drawer show={this.state.sideDrawerOpen} />
        {backDrop}
        <Header />
        <About />
        <Experience />
        <Projects />
        <div>
          <h1
            id="Skills"
            style={{ fontFamily: "Roboto Slab", textAlign: "center" }}
          >
            Skills
          </h1>
        </div>
        <Skills />
        <Education />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
