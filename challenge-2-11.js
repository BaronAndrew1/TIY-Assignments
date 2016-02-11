function lifetimeSupply(age, amountPerDay) {
var maxAge = 100;
var consumed = (100-age) * amountPerDay;
return consumed;
}
console.log(lifetimeSupply(20, 5));
console.log(lifetimeSupply(15, 10));
console.log(lifetimeSupply(40, 2));
