import Employee from "./employee.js";

export default class Developer extends Employee {
    constructor(inputId, inputFirstName, inputLastName, inputAge, inputGender, inputSalary, inputCorporation, manager) {
        super(inputId, inputFirstName, inputLastName, inputAge, inputGender, inputSalary, inputCorporation);

        this.tasksCompleted = 0;
        this.manager = manager;
        // this.#setFullName();

    }
    get otherManagerName() {
        return "Drug shef mi e " + this_otherManager;
    }
    set otherManagerName(managerObject) {
        managerObject != null
            ? (this._otherManager = `${managerObject.firstName}${managerObject.lastName}`)
            : (() => {
                throw new Error("Shef name is too short")
            })();
    }
    completeTask() {
        this.tasksCompleted += 1;

    }
    printEmployeeInfo() {
        super.printEmployeeInfo();
        console.log(` Finished tasks: ${this.tasksCompleted}`);
    }
    payRaise() {
        if (this.tasksCompleted > 10) {
            this.salary += 100;
            console.log("Congratulations, you got a raise!");
        }
        else {
            console.log(`${this.firstName.slice(0, this.firstName.length - 1)}che try harder :/`);
        }
    }
    static printManager(dev) {
        if (dev.manage === null) {
            console.log("Sam svoj gazda");
        }
        else {
            console.log(`${dev.manager.firstName} ${dev.manager.lastName}, mi e shef...`);
            if (dev.salary < 1000) {
                console.log("I pari ne dava");
            }
            else {
                console.log("Go otvara nekogas novcaniceto");
            }
        }
    }
}