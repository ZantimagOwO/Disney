function sum(a: number, b: number): number {
  return a + b;
}

test("sumar 1 y 2", () => {
  expect(sum(1, 2)).toBe(3);
});
