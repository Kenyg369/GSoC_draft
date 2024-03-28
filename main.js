import "./style.css";
import blenderLogo from "./public/Blender_logo.svg";
import OSArchLogo from "./public/osarch.ico";
import blenderBIMLogo from "./public/BlenderBIM_logo.png";

import { setupEditor } from "./editor.js";
document.querySelector("#entry").innerHTML = `
    <div>
        <a href="https://osarch.org/" target="_blank">
            <img src="${OSArchLogo}" class="logo" alt="OSArch Logo" />
        </a>
        <a href="https://www.blender.org/features/" target="_blank">
            <img src="${blenderLogo}" class="logo vanilla" alt="Blender Logo" />
        </a>
        <a href="https://blenderbim.org/" target="_blank">
        <img src="${blenderBIMLogo}" class="logo vanilla" alt="BlenderBIM Logo" />
        </a>
        <h1>Hello IFCTester!</h1>
        <div class="card">
            <button id="start-button">Let's start!</button>
        </div>
        <p class="read-the-docs">
            Click to start
        </p>
    </div>
`;

setupEditor(document.querySelector("#start-button"));
