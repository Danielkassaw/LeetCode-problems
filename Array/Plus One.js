/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let n = digits.length - 1;

  for (let i = n; i >= 0; i--) {
      if (digits[i] === 9) {
          digits[i] = 0;
      } else {
          digits[i] += 1;
          return digits;
      }
  }

  digits.unshift(1);

  return digits;

};  