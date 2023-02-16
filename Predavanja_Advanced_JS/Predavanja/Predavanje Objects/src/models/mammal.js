export default class Mammal {
     static Gender = {
        MALE:'Male',
        FEMALE:'Female'
     }
static NumberOfLegs = {
    TWO_LEGGED: 2,
    FOUR_LEGGED:4,
}
    constructor(name, age, gender) {

        this.numberOfLegs;
        this.type = this.constructor.name;



        this.drinksMilk = true;
        this.hasWarmBlood = true;
        this.numberOfEyes = 2;


        this.age = age;
        this.name = name;
        this.gender = gender;


        this.breathes = true;
        this.hasPulse = true;
        this.isAlive = true;
    }
    die(causeOfDeath = 'natural causes') {
        this.breathes = false;
        this.hasPulse = false;
        this.isAlive = false;

        this.causeOfDeath = causeOfDeath;
    }
}