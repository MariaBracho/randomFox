import { app } from "./render/app.js";
import getFox from "./service/api.js";

app();
getFox();

const button = document.getElementById("button");
button.addEventListener("click", () => getFox());
