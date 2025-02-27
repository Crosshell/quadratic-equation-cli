import QuadraticEquation from './quadraticEquation';

export function solveAndPrintEquation(a: number, b: number, c: number): void {
  console.log(`Equation is: (${a}) x^2 + (${b}) x + (${c}) = 0`);

  const equation = new QuadraticEquation(a, b, c);
  const roots: number[] = equation.getRoots();

  console.log(`There are ${roots.length} root(s)`);
  if (roots.length > 0) console.log(`x1 = ${roots[0]}`);
  if (roots.length > 1) console.log(`x2 = ${roots[1]}`);
}
