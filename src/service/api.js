import { loaderFox } from "../render/app.js";
import { hideLoaderFox } from "../render/app.js";

const API_URL = "https://randomfox.ca/floof/";

export default async function getFox() {
  try {
    loaderFox();
    const img = document.getElementById("foxImg");
    const api = await fetch(API_URL, { cache: "no-store" });
    const data = await api.json();
    return (img.src = `${data.image}`);
  } catch (error) {
    console.log(error);
  } finally {
    hideLoaderFox();
  }
}
