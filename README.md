# quadratic-equation-cli
## Quadratic Equation Solver

This application solves quadratic equations of the form:

### a x^2 + b x + c = 0

It supports both interactive and non-interactive modes

## Installation & Setup

Ensure you have [Node.js](https://nodejs.org/) installed. Then, clone the repository and install dependencies:

```sh
git clone https://github.com/Crosshell/quadratic-equation-cli
cd quadratic-equation-cli
npm install
```

## Building the Project

Before running the application, compile the TypeScript code to JavaScript:

```sh
npm run build
```

This will generate JavaScript files in the `dist` directory

## Running the Application

### Interactive Mode
Run the compiled application without arguments to enter interactive mode:

```sh
node dist/index.js
```

You will be prompted to enter the coefficients (a, b, c) manually

### Non-Interactive Mode
To run the application in non-interactive mode, provide a file path as an argument:

```sh
node dist/index.js <file_path>
```

For example:
```sh
node dist/index.js input.txt
```

## File Format for Non-Interactive Mode

The input file must contain exactly **three space-separated numbers** (a, b, c) representing the coefficients of the quadratic equation. Example:

```
1 -3 2
```

This corresponds to the equation:

```
(1) x^2 + (-3) x + (2) = 0
```

## Revert commit

https://github.com/Crosshell/quadratic-equation-cli/commit/3bb9e9a491c2e2bf5e65075565cae8e730e84104
