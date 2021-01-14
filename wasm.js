importScripts("pkg/grok.js");

const { neural_network }  = wasm_bindgen;

;(async () => {
  await wasm_bindgen('./pkg/grok_bg.wasm');
})();
console.log("loaded wasm")

var worker = new Worker('worker.js');
var text = new Worker('text.js');


worker.onmessage = function (message){
self.image = message.data;
console.log("got a message from worker.js in wasm");
text.onmessage = function (e){
self.weights = e.data;
console.log("got a message from text.js in wasm");


;(async () => {
  const t0 = performance.now();
  const display = await neural_network(image,weights); //image, weights
  const t1 = performance.now();
  console.log(`wasm function took ${t1 - t0} milliseconds.`);
  console.log("sending from wasm 💐")

  const t2 = performance.now();

  self.postMessage(display);
  const t3 = performance.now();
  console.log(`posting message ${t3 - t2} milliseconds.`);

})();

}

}
