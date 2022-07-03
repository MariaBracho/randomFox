export const app = () => {
  document.getElementById("root").innerHTML = `
    <div class="container">
     <main>
     <h2>Fox</h2>
     <img id="foxImg" class="foxImg">
     <div id="loader"></div>
     <button class="button" id="button">Click</button>
     </main>
    </div>
    `;
};

export const loaderFox = () => {
  document.getElementById("loader").innerHTML = `
    <div class="loader"></div>
    `;
};

export const hideLoaderFox = () => {
  document.getElementById("loader").innerHTML = ``;
};
