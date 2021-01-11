importScripts('vecs.js');

const r = Object.values(random)
var l = r.length;
var send = []
if (r[0]!==0&&r[0]!==""&&r[0]!==null&&r[0]!==undefined){
  for (var i=0;i<l;i++){
    var n = Math.round(r[i]);
    send.push(n)
  }
  send.fill(255,639999, 640000);
  console.log(send);
  self.postMessage(send);
}
