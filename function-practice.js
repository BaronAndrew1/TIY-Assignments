function verbing(token) {

    if(string.length >= 3){
        token.push(token + "ing");
        token.pop();
        console.log(token);
}
    else{token.push(token + "ly")
      token.pop();
      console.log(token);
}

function verbing (word) {
  if (word.length < 3) return word;
  if (word.slice(-3) === 'ing'){
      return word + "ly";
  } else {
      return word + "ing";
  }
}
console.log(verbing(""));
