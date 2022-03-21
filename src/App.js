import "./App.css";
import { TextField, ColorPicker } from "@shopify/polaris";
import React, { useCallback, useState, useEffect } from "react";

import html2canvas from "html2canvas";

function hsl2rgba(h, s, l,alpha) {
    s /= 100;
    l /= 100;
    const k = n => (n + h / 30) % 12;
    const a = s * Math.min(l, 1 - l);
    const f = n =>
        l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    
    let temp = [255 * f(0), 255 * f(8), 255 * f(4)];
   
    return "rgba("+temp[0]+","+temp[1]+","+temp[2]+","+alpha+")";
}


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
              color:   hsl2rgba(textColor.hue, textColor.saturation * 100, textColor.brightness * 100, textColor.alpha ? textColor.alpha : 0.0),

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
