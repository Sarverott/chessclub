function errorHandle(...args){
  console.log(...args);
}
function fillZeros(input, count){
  input=input.toString();
  while(input.length<count){
    input="0"+input;
  }
  return input;
}
