function pigLatin(str){
  //if (str.charAt(0) === 'a' || 'e' || 'i' || 'o' || 'u'){
  if (str.charAt(0).toLowerCase() === 'e'){
    var let1 = str.slice(0, 1);
    str = str + "ay";
    return str;
  }
  if (str.charAt(0).toLowerCase() === 'b'){
    var let2 = str.slice(0, 1);
    str = str + let2 + "ay";
    return str;
  }
}
console.log(pigLatin("ellie"));
console.log(pigLatin("ben"));
