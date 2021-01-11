importScripts('vecs.js');

const rand = Object.values(random)

var l = rand.length;

for (var i=0;i<l;i++){
  rand[i]=Math.round(rand[i])
}
rand.fill(255,639999, 640000);
if (rand[0]!==0){
  console.log(rand[0]);
  self.postMessage(rand);
}
