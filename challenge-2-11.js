var x = "100";
function lifetimeSupply(age, amountPerDay) {
var maxAge = 100;
var consumed = (100-age) * amountPerDay;
return consumed;
}
console.log(lifetimeSupply(20, 5));
console.log(lifetimeSupply(15, 10));
console.log(lifetimeSupply(40, 2));
window.alert("You will need " + (lifetimeSupply(20, 5)) + " to last until the ripe old age of " + x)
