import Developer from "./scripts/models/developer.js";
import Manager from "./scripts/models/manager.js";



const manager1 = new Manager(2,"Tea","Pandzarova",25,"Female",1000,"Happy Bar");
const developer1 = new Developer(1,"Slave","Ivanovski",19,"Male",500,"Happy Bar",manager1);

developer1.printEmployeeInfo();

developer1.payRaise();

let i = 0;
while(i<=10){
    developer1.completeTask();
    i++;
}
developer1.payRaise();

Developer.printManager(developer1);
const manager2 = new Manager(2,"Andrej","Petreski",22,"Male",800,"Happy Bar");
developer1._otherManager = manager2;
console.log(developer1._otherManager);


    
