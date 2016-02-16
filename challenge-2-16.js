var pluralize = function(x, y){
  if(y > 1){
  console.log(y + " " + x + "s");
  }
  else{
    console.log(y+ " " + x);
  }
};
pluralize("dog", 1);
