const arg = process.argv[2];
const num = parseInt(arg, 10);
if (!isNaN(num) && arg !== undefined) {
  console.log(`My number: ${num}`);
} else {
  console.log("Not a number");
}