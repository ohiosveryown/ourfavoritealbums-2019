import luxy from "luxy.js"

let width = window.innerWidth
if (width > 1024) {
  luxy.init({
    wrapper: "#luxy",
    targets: ".luxy-el",
    wrapperSpeed: 0.06,
  })
}