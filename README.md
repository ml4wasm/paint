# paint
<h3> Generates "paintings" using basic machine learning and WebAssembly. </h3>
<img src="https://raw.githubusercontent.com/ml4wasm/paint/main/assets/quick.gif" height="300">
<h2> API </h2>
Rust compiled with <a href="https://github.com/rustwasm/wasm-pack">📦✨wasm-pack</a> generates the WebAssembly binary, so loading the <code>.wasm</code> file is relatively painless:

<pre>
(async () => {
  await wasm_bindgen('./pkg/grok_bg.wasm');
})();
</pre>

The function exported from Rust is called <code>neural_network</code> (even though we technically just have a perceptron), so we need to export that function before using it.

<pre>
const { neural_network }  = wasm_bindgen;
const display = await neural_network(image,weights); //train the network with the image and weights
</pre>

There's some freedom in how you actually display the image. The "image" is an array of numbers. One API for converting numbers to images is the createImageData API, so we can use that:

<pre>
var ImgData = ctx.createImageData(300, 300); //300px is the image width/height we chose
var srcIndex=0, dstIndex=0, curPixelNum=0;

for (curPixelNum=0; curPixelNum<300*300;  curPixelNum++){ 
  ImgData.data[dstIndex] = send[srcIndex]; // r
  ImgData.data[dstIndex+1] = send[srcIndex+1]; // g
  ImgData.data[dstIndex+2] = send[srcIndex+2]; // b
  ImgData.data[dstIndex+3] = 255; // constant alpha, 100% opaque
  srcIndex += 3;
  dstIndex += 4;
}
ImgData.data = image;

ctx.putImageData(ImgData, 0, 0); //this renders the image to the canvas

</pre>

and there you go! You can use WebAssembly and basic machine learning to create a "painting" generator.
