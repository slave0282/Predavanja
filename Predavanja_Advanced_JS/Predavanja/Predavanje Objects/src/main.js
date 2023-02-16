import Horse from "./models/animal/horse.js";
import Sharplaninec from "./models/animal/sharplaninec.js"

console.log('Main class');

const horse1 = new Horse('Goce',7,'Male');
const sharplaninec1 = new Sharplaninec('sar',2,'Male');
console.log(sharplaninec1);
console.log(horse1);

// const pudlica1 = new Pudlica('Sarko',5,undefined);

const horse2 = new Horse('Bukefal',35,Horse.Gender.MALE);
console.log(horse2);

horse2.die();

console.log(horse2 instanceof Sharplaninec);