{
  let a = 10;
  var b = 1;
}
// console.log(a);// Cannot find name 'a';
console.log(b); // 1

var a = [];
for (var i=0; i<10;i++) {
  a[i] = function(){
    console.log(i);
  }
}

a[6]();//10

var a = [];
for (let i=0; i<10;i++) {
  a[i] = function(){
    console.log(i);
  }
}
a[6]();//6
