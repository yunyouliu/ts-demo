function add(a: number, b: number, c?: string): number {
  console.log(c);

  return a + b;
}

add(1, 2, "8-----00");

interface ifunc {
  (a: string, b: string, c?: number): string;
}

var function2: ifunc = function (a, b, c) {
  return a + b + c;
};
function2("1", "2", 3);
export default {};
