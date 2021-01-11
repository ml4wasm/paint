importScripts("pkg/grok.js");

const { neural_network }  = wasm_bindgen;

// async function run() {

// await wasm_bindgen('pkg/grok_bg.wasm');
wasm_bindgen('pkg/grok_bg.wasm');

self.onmessage = function (message){

  async function run() {

  const display = await neural_network(message.data[0], essage.data[1]); //image, weights
  self.postMessage(display);

  }

  run();

}
