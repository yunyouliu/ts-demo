const obj: obj = {
  name: "张三",
  age: 18,
};

interface obj {
  name: string;
  age: number;
  readonly location: string;
}

console.log(obj.age);

export default {};
