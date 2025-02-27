import fs from 'node:fs/promises';

export async function startNonInteractive(filePath: string): Promise<void> {
  const content: string = (await fs.readFile(filePath, 'utf-8')).trim();
  const coeffs: number[] = content.split(' ').map(parseFloat);

  if (coeffs.length !== 3 || coeffs.some(isNaN)) {
    throw new Error('Invalid file format');
  }
}
