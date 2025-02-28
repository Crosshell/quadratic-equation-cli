import readline, { Interface } from 'node:readline/promises';
import { solveAndPrintEquation } from './solver';

const rl: Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function askForNumber(
  prompt: string,
  excludedValues: number[] = [],
): Promise<number> {
  while (true) {
    const value: string = await rl.question(prompt);
    const num: number = parseFloat(value);

    if (isNaN(num)) {
      console.log(`Error. Expected a valid real number, got ${value} instead`);
      continue;
    }
    if (excludedValues.includes(num)) {
      console.log(`Error. a cannot be ${num}`);
      continue;
    }

    return num;
  }
}

export async function startInteractive(): Promise<void> {
  try {
    console.log('Welcome to interactive mode \nPlease enter arguments');

    const a: number = await askForNumber('a = ', [0]);
    const b: number = await askForNumber('b = ');
    const c: number = await askForNumber('c = ');

    solveAndPrintEquation(a, b, c);
  } catch (err) {
    console.error(err);
  } finally {
    rl.close();
  }
}
