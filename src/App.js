import "./App.css";
import { useState } from "react";
import QRCode from "react-qr-code";
import useLocalStorage from "./LightDarkMode/useLocalStorage";
import { FaSun, FaMoon } from "react-icons/fa";

function App() {
  const [input, setInput] = useState("");
  const [qrcode, setQrcode] = useState("");
  const [theme, setTheme] = useLocalStorage("theme", "dark");
  //const [displayTheme, setDisplayTheme] = useState("dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  const handleGenerate = () => {
    setQrcode(input);
  };
  return (
    <div>
      <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
          <div className="header">
            <h1>QR Code Generator</h1>
            {theme === "dark" ? (
              <FaSun
                style={{ color: "yellow" }}
                onClick={handleToggleTheme}
                className="theme-type"
              ></FaSun>
            ) : (
              <FaMoon onClick={handleToggleTheme} className="theme-type"></FaMoon>
            )}
          </div>
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name="qr-code"
            placeholder="Enter Your Value Here"
          />
          <button
            disabled={input && input.trim() !== "" ? false : true}
            onClick={handleGenerate}
          >
            Generate
          </button>
          <br />
          <div className="qrcode">
            <QRCode
              id="qr-code-value"
              value={qrcode}
              size={380}
              bg="darkblue"
            />
          </div>
        </div>
      </div>
      <div>Made By Soumyajit Ghosh</div>
    </div>
  );
}

export default App;
