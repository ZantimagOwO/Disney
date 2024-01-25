const myName: string = 'Nico';
const myAge: number = 12;

const suma = (a: number, b: string) => {
    return a + b;
}
// suma(2, 'a');
//console.log(suma(2, '2'))

class Persona {
    private age: number;
    private name: string;


    constructor(age: number, name: string) {
        this.age = age;
        this.name = name;
    }


    public getSummary(): string {
        return this.age + " " + this.name;
    }
}

let p: Persona = new Persona(23, "Pedro")

console.log(p.getSummary())