export class MathProblem {
  operator: string;
  num1: number;
  num2: number;

  constructor(operator: string, num1: number, num2: number) {
    this.operator = operator;
    this.num1 = num1;
    this.num2 = num2;
  }

  solve(): number {
    return eval(`${this.num1} ${this.operator} ${this.num2}`);
  }

  toString() {
    return `${this.num1} ${this.operator} ${this.num2}`;
  }
}
