Array.prototype.extend = function (other_array) {
    other_array.forEach(function(v) {this.push(v)}, this);
}
var encoder = new TextEncoder;
self.onmessage = function (e){
  b1 = encoder.encode(e.data);
  var weights = Object.values(b1);
  while (weights.length < 640000) {
  weights.extend(weights)
  }
  weights.length = 640000;
  self.postMessage(weights);
  console.log("sent weights!");
}
