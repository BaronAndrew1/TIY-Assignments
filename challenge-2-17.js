var es = "spanish";
var de = "german";
var en = "english";
function helloWorld(code){
  if (code == es){
    console.log("HOLA!");
  }
  if (code == de){
    console.log("GUTEN TAG!");
  }
  if (code == en){
    console.log("Hello");
  }
  else if(code !== es || de || en){
    console.log("Hello");
  }
}
helloWorld(es)
