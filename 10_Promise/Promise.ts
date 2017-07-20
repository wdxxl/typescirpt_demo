
var promise = new Promise(function(resolve, reject) {
  var x = 6; // can be any number
  var rand = Math.floor(Math.random()*x) + 1;
  if(rand > 3){
    resolve("success " + rand);
  } else {
    reject("missing is needed data " + rand);
  }
});
promise.then(function(value){
  document.body.innerHTML = "promise.then Success: " + value;
}, function(value){
  document.body.innerHTML = "promise.then Failure: " + value;
});
