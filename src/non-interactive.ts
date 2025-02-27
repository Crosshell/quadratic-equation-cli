import fs from 'node:fs/promises';

export async function startNonInteractive(filePath: string): Promise<void> {
  const content: string = (await fs.readFile(filePath, 'utf-8')).trim();
  const nums: number[] = content.split(' ').map(parseFloat);

  if (nums.length !== 3 || nums.some(isNaN)) {
    throw new Error('Invalid file format');
  }

  const [a, b, c] = nums;
  const coeffs: Coefficients = { a, b, c };

  console.log(
    `Equation is: (${coeffs.a}) x^2 + (${coeffs.b}) x + (${coeffs.c}) = 0`,
  );
}
