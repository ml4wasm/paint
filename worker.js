importScripts('vecs.js');

const r = Object.values(random)

var rand = r.slice();
var l = rand.length;

var send = []
for (var i=0;i<l;i++){
  var n = Math.round(rand[i]);
  send.push(n)
}
send.length = 640000;
send.fill(255,639999, 640000);

if (send[0]!==0){
  console.log(send);
  self.postMessage(send);
}
