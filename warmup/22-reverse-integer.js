function reverse(x) {
  let xCopy = x;
  let reversed = 0;
  x = Math.abs(x); // Convert to positive for processing

  while( x > 0) {
    let rem = x % 10;
    reversed = reversed * 10 + rem;
    x = Math.floor(x / 10);
  }

  let limit = Math.pow(2, 31);
  if(reversed < -limit || reversed > limit - 1) {
    return 0; // Return 0 if reversed integer overflows
  }

  return xCopy < 0 ? -reversed : reversed;
}

// function reverse(x) {
//   let reversed = 0;

//   while(x !== 0) {
//     let rem = x % 10;
//     reversed = reversed * 10 + rem;
//     x = Math.trunc(x / 10);
//   }

//   let limit = Math.pow(2, 31);
//   if(reversed < -limit || reversed > limit - 1) {
//     return 0; // Return 0 if reversed integer overflows
//   }

//   return reversed;
// }

// ---------- Test Cases ----------
console.log(reverse(123)); // Output: 321
console.log(reverse(-123)); // Output: -321
console.log(reverse(120)); // Output: 21
console.log(reverse(0)); // Output: 0
console.log(reverse(1534236469)); // Output: 0 (overflow case)