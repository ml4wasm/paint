importScripts("pkg/grok.js");

const { neural_network }  = wasm_bindgen;

;(async () => {
  await wasm_bindgen('./pkg/grok_bg.wasm');
})();
console.log("loaded wasm")

self.onmessage = function (message){

// ;(async () => {
  const t0 = performance.now();
  //const display = await neural_network(message.data[0], message.data[1]); //image, weights
  const display = neural_network(message.data[0], message.data[1]); 
  const t1 = performance.now();
  console.log(`wasm function ${t1 - t0} milliseconds.`);
  console.log("sending from wasm 💐")

  const t2 = performance.now();

  self.postMessage(display);
  const t3 = performance.now();
  console.log(`posting message ${t3 - t2} milliseconds.`);

// })();

}
