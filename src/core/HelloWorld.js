import React, { useState, useEffect } from "react";

import { Button, ColourName } from "common/components";

export const HelloWorld = () => {
  const [myPalette, setMyPalette] = useState([]);

  const getRandHex = () => {
    const randHex = makeSix(Math.floor(Math.random() * 16777215).toString(16));

    function makeSix(str) {
      let newStr = str;
      if (str.length < 6) {
        newStr = `0${str}`;
        makeSix(newStr);
      }
      return newStr;
    }
    return `#${randHex}`;
  };

  const saveColour = () => {
    const newPalette = [...myPalette, currHex].reduce(
      (unique, item) => (unique.includes(item) ? unique : [...unique, item]),
      []
    );

    setMyPalette(newPalette);
  };

  const [currHex, setCurrHex] = useState(getRandHex());
  useEffect(() => {
    document.body.style.background = currHex;
  });

  return (
    <div className="container">
      <ColourName>{currHex}</ColourName>
      <Button onClick={() => setCurrHex(getRandHex())}>Get New Colour</Button>
      <Button onClick={() => saveColour()}>Save this Colour</Button>
    </div>
  );
};
