function alphaSort(str){
  var splitString = str.toLowerCase().split("");
  splitString.sort();
  var reString = splitString.join("");
  console.log(reString);
}
alphaSort('happydog');
alphaSort('webmaster');
