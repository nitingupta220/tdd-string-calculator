// Case - 1: Simple string that will add any amount of numbers - it will return 0 if no string is passed
// class StringCalculator {
//   add(numbers) {
//     if (!numbers) return 0;
//     const parts = numbers.split(',');
//     return parts.map(Number).reduce((a, b) => a + b, 0);
//   }
// }

// // Case 2: Handle new lines between numbers (instead of commas)
// class StringCalculator {
//   add(numbers) {
//     if (!numbers) return 0;
//     const parts = numbers.split(/,|\n/);
//     return parts.map(Number).reduce((a, b) => a + b, 0);
//   }
// }

// // Case 3: Handle custom delimiters
// class StringCalculator {
//   add(numbers) {
//     if (!numbers) return 0;

//     let delimiter = /,|\n/;
//     if (numbers.startsWith('//')) {
//       const [delimLine, rest] = numbers.split('\n');
//       delimiter = new RegExp(delimLine.slice(2));
//       numbers = rest;
//     }

//     const parts = numbers.split(delimiter);
//     return parts.map(Number).reduce((a, b) => a + b, 0);
//   }
// }

// Case 4: Handle negative numbers
class StringCalculator {
  add(numbers) {
    if (!numbers) return 0;

    let delimiter = /,|\n/;
    if (numbers.startsWith('//')) {
      const [delimLine, rest] = numbers.split('\n');
      delimiter = new RegExp(delimLine.slice(2));
      numbers = rest;
    }

    const nums = numbers.split(delimiter).map(Number);
    const negatives = nums.filter((n) => n < 0);
    if (negatives.length) {
      throw new Error(`negative numbers not allowed ${negatives.join(',')}`);
    }

    return nums.reduce((a, b) => a + b, 0);
  }
}
