export default class Foo {
  constructor(bar) {
    this.foo = bar;
    console.log(this.foo);
  }

  doSomething(something) {
    console.log(`Do something ${something}`);
  }
}
