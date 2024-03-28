import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupEditor } from "./editor.js";

document.querySelector("#entry").innerHTML = `
    <div>
        <a href="https://vitejs.dev" target="_blank">
            <img src="${viteLogo}" class="logo" alt="Vite logo" />
        </a>
        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
            <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
        </a>
        <h1>Hello IFCTester!</h1>
        <div class="card">
            <button id="counter" type="button">Let's start!</button>
        </div>
        <p class="read-the-docs">
            Click to start
        </p>
    </div>
`;

setupEditor(document.querySelector("#counter"));
