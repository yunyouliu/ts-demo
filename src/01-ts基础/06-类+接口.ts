class A  implements Ifunc {
  a1() {}
  a2() {}
  getName() {
    return "aaa";
  }
}

class B  implements Ifunc {
  b1() {}
  b2() {}
  getName() {
    return "ccc";
  }
}
interface Ifunc {
  getName: () => string;
}

function init(obj:Ifunc) {
  obj.getName();
}
var objA = new A();
var objB = new B();
init(objA);
init(objB);
export default {};
