import "./test.css";
import glsl from "./test.glsl";
import img from "./test.png";

import "./test.svg?sprite";
import svg from "./test.svg";
import Component from "./test.ts";

console.log(glsl);
console.log(img);
console.log(svg);

const svgImage = document.createElement("img");
svgImage.src = svg;

document.body.appendChild(svgImage);

// typescript
const component = new Component();
component.init();

// syntax-dynamic-import
async function getComponent() {
  var element = document.createElement("div");
  const importLodash = await import(/* webpackChunkName: "lodash" */ "lodash");
  const _ = importLodash.default();

  element.innerHTML = _.join(["Hello", "webpack"], " ");
  return element;
}

getComponent().then((component) => {
  document.body.appendChild(component);
});

// class-properties
export default class App {
  instanceProperty = "app";
  boundFunction = () => {
    return this.instanceProperty;
  };

  static staticProperty = "staticProperty";
  static staticFunction = function () {
    return App.staticProperty;
  };
}

// rest
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
console.log(x); // 1
console.log(y); // 2
console.log(z); // { a: 3, b: 4 }

// spread
let n = { x, y, ...z };
console.log(n); // { x: 1, y: 2, a: 3, b: 4 }
