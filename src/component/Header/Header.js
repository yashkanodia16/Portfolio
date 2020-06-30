import React from "react";
import { Divider } from "@material-ui/core";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import styles from "./Header.module.css";
import "./main.scss";

export default function Header() {
  return (
    <div>
      <p className={styles.header}>YASH KANODIA</p>
      <div className={styles.fix_height}>
        <TypistLoop interval={1000}>
          {["Web Developer", "Software Developer", "Full Stack Developer"].map(
            (text) => (
              <Typist
                key={text}
                cursor={{ blink: true }}
                className={styles.subheader}
              >
                {text}
                <Typist.Delay ms={1500} />
                <Typist.Backspace count={text.length} />
              </Typist>
            )
          )}
        </TypistLoop>
      </div>
      <br />
      <Divider />
      <br />
    </div>
  );
}
