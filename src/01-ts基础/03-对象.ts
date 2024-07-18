const obj:obj = {
  name: "张三",
  age: 18,
  location: "北京",
};

interface obj {
  name: string;
  age: number;
  readonly location?: string;
  [key: string]: any;
}

console.log(obj);

export default {};
