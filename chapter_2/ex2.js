for (let index = 0; index < 100; index++) {
  if ((index + 1) % 3 == 0 && (index + 1) % 5 == 0) {
    console.log("FizzBuzz");
  } else if ((index + 1) % 3 == 0) {
    console.log("Fizz");
  } else if ((index + 1) % 5 == 0) {
    console.log("Buzz");
  } else {
    console.log(index + 1);
  }
}
