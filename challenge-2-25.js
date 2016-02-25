var array = ["red", "blue", "green", "yellow", "orange"];
for(var i = 0; i<array.length; i++){
  var number = (i+1);
    if (number === 1){
      number = number + "st";
    }
    if (number === 2){
      number = number + "nd";
    }
    if (number === 3){
      number = number + "rd";
    }
    if (number > 3){
      number = number + "th";
    }
    console.log("my " + number + " favorite color is " + array[i]);
}
