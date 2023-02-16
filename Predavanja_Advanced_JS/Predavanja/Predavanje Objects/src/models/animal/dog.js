import Animal from "./animal.js";

export default class Dog extends Animal {
    constructor(name, age, gender) {
        super(name, age, gender);

        this.numberOfLegs = 4;
        this.barks = true;

    }
    bark(whatToBark = 'bark bark bark') {
        console.log(whatToBark);
    }
}