class Calculator {
  constructor(pi, e) {
    this.pi = Math.PI;
    this.e = Math.E;
  }
  ratio(x, y, width) {
    return (y / x) * width;
  }
  percentage(x, y) {
    let p = (x / y) * 100;
    return `${p}%`;
  }
  add(x, y) {
    return x + y;
  }
  subtract(x, y) {
    return x - y;
  }
  multiply(x, y) {
    return x * y;
  }
  divide(x, y) {
    return x / y;
  }
  modulation(x, y) {
    return x % y;
  }
  elevate(x, y) {
    return Math.pow(x, y);
  }
  sqrt(x) {
    return Math.sqrt(x);
  }
}
let calculate = new Calculator();
console.log(calculate.pi, "\n");
console.log(calculate.e, "\n");
console.log(calculate.ratio(16, 9, 1360), "\n");
console.log(calculate.percentage(5, 20), "\n");
console.log(calculate.add(5, 30), "\n");
console.log(calculate.subtract(20, 5), "\n");
console.log(calculate.multiply(20, 5), "\n");
console.log(calculate.divide(20, 5), "\n");
console.log(calculate.modulation(32, 5), "\n");
console.log(calculate.elevate(5, 2), "\n");
console.log(calculate.sqrt(25), "\n");
