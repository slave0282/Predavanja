import Dog from "./dog.js";

export default class Sharplaninec extends Dog{
    constructor(name,age,gender) {
        super(name,age,gender);

        this.isShepard = true;
        this.isAfraidOfBears = false;
        this.scaresWolves = true;
    }
    bark(whatToBark){
        super.bark(whatToBark);
        console.log('UUGH WOLVES ARE SCARED');

    }
}