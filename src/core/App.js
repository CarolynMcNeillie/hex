import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import styles from "./App.module.scss";
import { HelloWorld } from "./HelloWorld";

export const App = () => (
  <Router>
    <main className={styles.app}>
      <HelloWorld />
    </main>
  </Router>
);
