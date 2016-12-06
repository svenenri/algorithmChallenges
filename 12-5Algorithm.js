function add(a, b){
  return a + b;
}

function sub(a, b){
  return a - b;
}

function multiply(a, b){

  var product = 0;

  for(var i = 0; i < b; i = add(i, 1) ){
    product = add(a, product);
  }
  return product;
}

console.log(multiply(45, 128));

//var something = 10;
//something = something + 1
//something = add(something, 1);

//9 * 3 = 27
