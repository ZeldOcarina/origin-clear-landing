const height = document
  .querySelector("body > div.body-wrapper")
  .getBoundingClientRect().height;

document.body.setAttribute("style", `height:${height - 900}px`);
