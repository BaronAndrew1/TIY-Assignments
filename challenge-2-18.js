function assignGrade(num){
  parseInt(num);
  if(num <=100 && num >=90){
    console.log("You got an A!");
  }
  if(num < 90 && num >= 80){
    console.log("You got a B!");
  }
  if(num < 80 && num >= 70){
    console.log("You got a C!");
  }
  if(num < 70 && num >= 60){
    console.log("You got a D!");
  }
  if(num < 60){
    console.log("You Fail....");
  }
  if(num > 100){
    console.log("Did you do some extra credit or are you cheating?");
  }
}
assignGrade(50);
assignGrade(60);
assignGrade(70);
assignGrade(80);
assignGrade(90);
assignGrade(101);
