export default class QuadraticEquation {
  private readonly a: number;
  private readonly b: number;
  private readonly c: number;
  private readonly discriminant: number;
  private readonly roots: number[];

  constructor(a: number, b: number, c: number) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.discriminant = this.calculateDiscriminant();
    this.roots = this.calculateRoots();
  }

  private calculateDiscriminant(): number {
    return this.b ** 2 - 4 * this.a * this.c;
  }

  private calculateRoots(): number[] {
    if (this.discriminant < 0) {
      return [];
    }

    const sqrtD: number = Math.sqrt(this.discriminant);

    if (this.discriminant > 0) {
      return [
        (-this.b + sqrtD) / (2 * this.a),
        (-this.b - sqrtD) / (2 * this.a),
      ];
    }

    return [-this.b / (2 * this.a)];
  }

  getRoots(): number[] {
    return this.roots;
  }
}
