var x = 0;
var i;
var fib = [];

fib[0] = 0;
fib[1] = 1;
for(i=2; i<=33; i++)
{
    fib[i] = fib[i-2] + fib[i-1];
    if (fib[i] % 2 === 0)

    {
    x = x + fib[i];
    console.log(fib[i]);
    }
}
console.log("\n" +"Sum = " + x);
