import fs from 'node:fs/promises';
import { solveAndPrintEquation } from './solver';

export async function startNonInteractive(filePath: string): Promise<void> {
  try {
    console.log('Welcome to non-interactive mode');
    const content: string = (await fs.readFile(filePath, 'utf-8')).trim();
    const nums: number[] = content.split(' ').map(parseFloat);

    if (nums.length !== 3 || nums.some(isNaN)) {
      console.log('Invalid file format');
      return;
    }

    const [a, b, c] = nums;

    if (a === 0) {
      console.log('Error. a cannot be 0');
    }

    solveAndPrintEquation(a, b, c);
  } catch (err) {
    if ((err as NodeJS.ErrnoException).code === 'ENOENT') {
      console.log(`File ${filePath} does not exist`);
    } else {
      console.error(err);
    }
  }
}
