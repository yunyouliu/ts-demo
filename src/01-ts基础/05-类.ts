class Bus {
  private _list: any = [];
  public name: string = "bus";
  protected age: number = 100;
  subscribe(cb: any) {
    this._list.push(cb);
  }
  despatch() {
    this._list.forEach((cb: any) => cb && cb());
  }
}
var Obj = new Bus();

class child extends Bus {
  constructor() {
    super();
  }
  aaa() {
    console.log(this.age);
  }
}
 
export default {};
