importScripts('vecs.js');

const r = Object.values(random)

if (r[0]!==0&&r[0]!==""&&r[0]!==null&&r[0]!==undefined){
  console.log(r);
  self.postMessage(r);
}
