const videoIcons = document.querySelectorAll(".video__play-icon");
const overlays = document.querySelectorAll(".video-player");
let closeIcons = document.querySelectorAll(".video-player__close");

function createIframe({ videoId, vimeoH, title }) {
  const iframe = document.createElement("iframe");
  iframe.src = `https://player.vimeo.com/video/${videoId}?h=${vimeoH}&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479`;
  iframe.setAttribute("frameborder", "0");
  iframe.setAttribute("allow", "autoplay; fullscreen; picture-in-picture");
  //iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute(
    "style",
    "position: absolute; top: 0; left: 0; width: 100%; height: 100%;"
  );
  iframe.setAttribute("title", title);
  return iframe;
}

videoIcons.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    const { videoId, vimeoH, title } = e.target.closest(".video").dataset;
    const iframe = createIframe({ videoId, vimeoH, title });
    document.getElementById("iframe-container").appendChild(iframe);
    for (let overlay of overlays) overlay.classList.remove("hidden");
  });
});

for (let closeIcon of closeIcons)
  closeIcon.addEventListener("click", () => {
    for (let overlay of overlays) overlay.classList.add("hidden");
  });
