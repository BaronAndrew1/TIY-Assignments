function greaterNum(num1, num2) {
  if(num1 > num2){
    console.log("Number 1 is greater, its value is " + num1);
  }
  if(num2 > num1){
    console.log("Number 2 is greater, its value is " + num2);
  }
  if(num1 === num2){
    console.log("The numbers are equal.");
  }
}

greaterNum(5,6);
greaterNum(6,5);
greaterNum(5,5);
