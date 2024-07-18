const obj: any = {
  name: "张三",
  age: 18,
  location: "北京",
};

interface obj {
  name: string;
  age: number;
  readonly location?: string;
}

console.log(obj.location);

export default {};
