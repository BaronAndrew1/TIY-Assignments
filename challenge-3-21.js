function palindrome(int) {
  var str = int.toString();
    var palindrome1 = str.split("");
    var palindrome2 = palindrome1.reverse();
    var palindrome3 = palindrome2.join("");
    if (palindrome3 === str){
        console.log(str + " is a palindrome.");
    } else {
        return;
    }
}

for(var i = 999; i>900; --i){
  palindrome(i*i);
}
