function alphaSort(str){
  var splitString = str.split("");
  splitString.sort();
  var reString = splitString.join("");
  console.log(reString);
}
alphaSort('happydog');
