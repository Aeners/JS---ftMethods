function ftMap(f, thisArg = null) {
  const fBounded = f.bind(thisArg || undefined);

  return this.reduce((acc, curr, i, baseArr) => {
    acc[i] = fBounded(curr, i, baseArr);
    return acc;
  }, Array(this.length));
}

Array.prototype.ftMap = ftMap;

const test = [1, 2];

console.log(test.ftMap((n, i) => n + 1 + i));
console.log(test.map((n, i) => n + 1 + i));
