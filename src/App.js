import "./App.css";
import { TextField, ColorPicker } from "@shopify/polaris";
import React, { useCallback, useState, useEffect } from "react";

import html2canvas from "html2canvas";
const hsl = require("hsl-to-hex");

export default function App() {
  const [img, setImg] = useState(null);
  const [value, setValue] = useState("your quote");
  const [textColor, setTextColor] = useState({
    hue: 120,
    brightness: 1,
    saturation: 1
  });
  const handleChange = useCallback((newValue) => setValue(newValue), []);
  useEffect(() => {
    function toImg() {
      html2canvas(document.getElementById("gg")).then(function (canvas) {
        const dd = canvas.toDataURL("image/png");
        setImg(dd);
      });
    }
    toImg();
  }, [value, textColor]);
  return (
    <div className="App">
      <div>
        <TextField
          label="Your quote"
          value={value}
          onChange={handleChange}
          autoComplete="off"
          placeholder="your quote"
          maxLength={100}
        />
      </div>
      <div style={{ marginTop: 20, marginBottom: 20 }}>
        <ColorPicker onChange={setTextColor} color={textColor} />
      </div>
      <div>
        <div
          id="gg"
          className="center"
          style={{
            width: "1000px",
            height: "500px",
            backgroundColor: "#000000",
            textAlign: "center",
            color: hsl(
              textColor.hue,
              textColor.saturation * 100,
              textColor.brightness * 100
            ),
            fontSize: 25,
            display: "",
            zIndex: 1000,
              position: "absolute",
              fontFamily:'Lato Bold Italic'
          }}
        >
          <p>{value} </p>
        </div>

        <img
          src={img}
          style={{
            width: "1000px",
            height: "500px",
            position: "relative",
            zIndex: 1100
          }}
          alt=""
        />
          </div>
          <div style={{marginTop:20}}>
          <a href='https://github.com/rahul-vyavahare/heroku-test' >Click To Git hub repository</a></div>
    </div>
  );
}
