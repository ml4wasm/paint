importScripts('vecs.js');

var wasm = new Worker('wasm.js');

console.log(random);
const r = Object.values(random)
var l = r.length;
var send = []
if (r[0]!==0&&r[0]!==""&&r[0]!==null&&r[0]!==undefined){
  for (var i=0;i<l;i++){
    var n = Math.round(r[i]);
    send.push(n)
  }
  send.fill(255,359999, 360000);
  console.log("sending this from worker.js " + send);
  wasm.postMessage(send);
}
