const myName = 'Julian';
const myAge = 12;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(12, 23);

class Persona {
  constructor(
    private age: number,
    private name: string,
  ) {
    this.age = age;
    this.name = name;
  }
  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}
const julian = new Persona(16, 'Julian');
julian.getSummary();
