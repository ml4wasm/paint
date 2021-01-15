
var worker=new Worker("js/worker.js");var c=document.getElementById("myCanvas");var ctx=c.getContext("2d");var mImgData=ctx.createImageData(300,300);(async()=>{await wasm_bindgen('./pkg/grok_bg.wasm')})();Array.prototype.extend=function(other_array){other_array.forEach(function(v){this.push(v)},this)}
var encoder=new TextEncoder;const{neural_network}=wasm_bindgen;async function asyncCall(){const display=await neural_network(send,weights);var srcIndex=0,dstIndex=0,curPixelNum=0;for(curPixelNum=0;curPixelNum<300*300;curPixelNum++){mImgData.data[dstIndex]=send[srcIndex];mImgData.data[dstIndex+1]=send[srcIndex+1];mImgData.data[dstIndex+2]=send[srcIndex+2];mImgData.data[dstIndex+3]=255;srcIndex+=3;dstIndex+=4}
mImgData.data=send;ctx.putImageData(mImgData,0,0)}
worker.onmessage=function(e){window.send=e.data}
function changeText(){a1=document.getElementById("place").value;b1=encoder.encode(a1);window.weights=Object.values(b1);while(weights.length<360000){weights.extend(weights)}
weights.length=360000;asyncCall();document.getElementById("place").style.display="none";document.getElementById("placer").style.display="none";document.getElementById("lab").style.display="none"}
