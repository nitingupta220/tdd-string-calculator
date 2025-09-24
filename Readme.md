# StringCalculator - Step-by-Step Implementation

This file contains a `StringCalculator` class that demonstrates Test-Driven Development (TDD) approach by implementing a string calculator with progressively complex features.

## Overview

The StringCalculator takes a string of numbers and returns their sum. It has been built incrementally through multiple cases, each adding new functionality while maintaining backward compatibility.

## Implementation Cases

The file contains 4 different implementations, showcasing the evolution of the calculator:

### Case 1: Basic Addition

- **Purpose**: Simple string calculator that adds comma-separated numbers
- **Features**:
  - Returns 0 for empty string
  - Adds comma-separated numbers
- **Example**: `"1,2,3"` → `6`

### Case 2: Multiple Delimiters

- **Purpose**: Handle both commas and newlines as delimiters
- **Features**:
  - All features from Case 1
  - Supports newline (`\n`) as delimiter
- **Example**: `"1\n2,3"` → `6`

### Case 3: Custom Delimiters

- **Purpose**: Support user-defined delimiters
- **Features**:
  - All features from Case 2
  - Custom delimiter specification using `//[delimiter]\n` format
- **Example**: `"//;\n1;2"` → `3`

### Case 4: Negative Number Validation (Current Implementation)

- **Purpose**: Add validation to reject negative numbers
- **Features**:
  - All features from Case 3
  - Throws error when negative numbers are encountered
  - Error message lists all negative numbers found
- **Example**: `"1,-2,3"` → throws `Error: negative numbers not allowed -2`

## How to Run

### Method 1: Node.js (Recommended)

```bash
# Navigate to the utils directory
cd src/pages/experiences/utils

# Run the file directly with Node.js
node data.js
```

### Method 2: Browser Console

1. Copy the StringCalculator class code
2. Paste it into your browser's developer console
3. Create an instance and test: `const calc = new StringCalculator(); calc.add("1,2,3");`

### Method 3: Import in Another File

```javascript
// If you convert to ES6 modules, you can import it
import { StringCalculator } from './data.js';

const calculator = new StringCalculator();
const result = calculator.add('1,2,3');
```

## Usage Examples

The current implementation (Case 4) supports all the following operations:

```javascript
const calc = new StringCalculator();

// Basic usage
console.log(calc.add('')); // Output: 0
console.log(calc.add('1')); // Output: 1
console.log(calc.add('1,5')); // Output: 6

// Multiple delimiters
console.log(calc.add('1\n2,3')); // Output: 6

// Custom delimiters
console.log(calc.add('//;\n1;2')); // Output: 3
console.log(calc.add('//|\n1|2|3')); // Output: 6

// Error cases
try {
  calc.add('1,-2,3');
} catch (error) {
  console.log(error.message); // Output: "negative numbers not allowed -2"
}

try {
  calc.add('//;\n1;-2;-3');
} catch (error) {
  console.log(error.message); // Output: "negative numbers not allowed -2,-3"
}
```

## Step-by-Step Development

To understand the evolution of this calculator, you can uncomment the previous cases:

### To see Case 1 (Basic Addition):

1. Comment out the current Case 4 implementation (lines 37-56)
2. Uncomment Case 1 (lines 2-8)
3. Run the file to see basic comma-separated addition

### To see Case 2 (Multiple Delimiters):

1. Comment out the current Case 4 implementation
2. Uncomment Case 2 (lines 11-17)
3. Test with strings like `"1\n2,3"`

### To see Case 3 (Custom Delimiters):

1. Comment out the current Case 4 implementation
2. Uncomment Case 3 (lines 20-34)
3. Test with custom delimiter strings like `"//;\n1;2"`

## Features Summary

| Feature                    | Case 1 | Case 2 | Case 3 | Case 4 |
| -------------------------- | ------ | ------ | ------ | ------ |
| Empty string returns 0     | ✅     | ✅     | ✅     | ✅     |
| Comma delimiter            | ✅     | ✅     | ✅     | ✅     |
| Newline delimiter          | ❌     | ✅     | ✅     | ✅     |
| Custom delimiters          | ❌     | ❌     | ✅     | ✅     |
| Negative number validation | ❌     | ❌     | ❌     | ✅     |

## Error Handling

The current implementation (Case 4) includes robust error handling:

- **Negative Numbers**: Throws an error listing all negative numbers found
- **Invalid Input**: Gracefully handles non-numeric strings (converts to NaN, which becomes 0 in addition)


