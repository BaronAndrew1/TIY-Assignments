function mixUp(str1, str2){
  str3 = str1.split("");
  str4 = str2.split("");
  str5 = str3.splice(0,2);
  str6 = str4.splice(0,2);
  str9 = str6.concat(str3);
  str10 = str9.join("");
  str7 = str5.concat(str4);
  str8 = str7.join("");
  str11 = str10.concat(" " + str8);
  console.log(str11);

}
mixUp("This", "Horse");
mixUp("Funny", "Bob");
mixUp("Happy", "Turtle");
