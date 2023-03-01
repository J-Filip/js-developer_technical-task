import "./style.css";
import javascriptLogo from "./javascript.svg";

document.querySelector("#app").innerHTML = `
  <div>
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    <h1>Tehcnical task </h1>
    <div class="about">
    <p> Video feed </p>
    </div>
    <div class="feed">
    </div>
  </div>
`;
let feed = document.querySelector(".feed");

async function getFeed(endpoint) {
  let response = await fetch(endpoint);
  let data = await response.json();

  feed.innerHTML = data
    .map(function (el) {
      return `<video width="320" height="240" poster="${el.video.poster}" controls>
<source src="${el.video.url}" type="video/mp4">
Your browser does not support the video tag.
</video>

`;
    })
    .join("");

  // find all videos and attach listeners for play event that toggles fullscreen on event fired.
  let videos = document.querySelectorAll("video");
  videos.forEach((video) => {
    element.addEventListener("play", (event) => {
      toggleFullscreen(video);
    });
  });
}

getFeed(
  "https://private-anon-d48de68883-technicaltaskapi.apiary-mock.com/feed"
);

// toggle video element in and out of fullscreen.
function toggleFullscreen(video) {
  video.requestFullscreen().catch((err) => {
    alert(
      `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
    );
  });
}
