import React from "react";

import styles from "./ColourName.module.scss";

export const ColourName = ({ title, children }) => {
  return <h1 className={styles.colourname}>{children}</h1>;
};
