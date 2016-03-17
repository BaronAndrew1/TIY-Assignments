function notRepeated(str) {
  var array = [];
  var counter;
  str.split('').forEach(function(first) {
    counter = 0;
    str.split('').forEach(function(next) {
      if (first === next) {
        counter += 1;
      }
    });
    array.push(counter);
  });
  console.log(str[array.indexOf(1)]);
}

notRepeated("aabbccddgffe");
