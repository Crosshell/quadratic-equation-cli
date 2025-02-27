import readline, { Interface } from 'node:readline/promises';

const rl: Interface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

async function askForNumber(prompt: string): Promise<number> {
  while (true) {
    const value: string = await rl.question(prompt);
    const num: number = parseFloat(value);

    if (!isNaN(num)) {
      return num;
    }
    console.log(`Error. Expected a valid real number, got ${value} instead`);
  }
}

export async function startInteractive(): Promise<void> {
  try {
    console.log('Welcome to non-interactive mode \nPlease enter arguments');

    const a: number = await askForNumber('a = ');
    const b: number = await askForNumber('b = ');
    const c: number = await askForNumber('c = ');

    console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);
  } catch (err) {
    console.log(err);
  } finally {
    rl.close();
  }
}

startInteractive();
