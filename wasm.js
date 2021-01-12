importScripts("pkg/grok.js");

const { neural_network }  = wasm_bindgen;


wasm_bindgen('pkg/grok_bg.wasm');


console.log("loaded wasm")

self.onmessage = function (message){

  async function pr() {

  const display = await neural_network(message.data[0], message.data[1]); //image, weights
  self.postMessage(display);

  }

  pr();

}
