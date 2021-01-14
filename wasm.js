importScripts("pkg/grok.js");

const { neural_network }  = wasm_bindgen;

;(async () => {
  await wasm_bindgen('./pkg/grok_bg.wasm');
})();
console.log("loaded wasm")

self.onmessage = function (message){

;(async () => {
  await wasm_bindgen('./pkg/grok_bg.wasm');
  const display = await neural_network(message.data[0], message.data[1]); //image, weights
  console.log("sending from wasm 💐")
  self.postMessage(display);

})();

}
