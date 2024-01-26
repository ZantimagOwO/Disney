function sum(a: number, b: string): number {
  return a + b;
}

test("sumar 1 y 2", () => {
  expect(sum(1, 2)).toBe(3);
});
