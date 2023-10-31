var foo = new Foo(1, 2); //ReferenceError

class Foo {
   constructor(x, y) {
      this.x = x;
      this.y = y;
   }
}