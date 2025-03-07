export class Customer {
    private firstName: string;
    private lastName: string;
    private age: number;
        
    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    public GetAge() {
        console.log(`Age: ${this.age}`);
        return this.age;
    }

    constructor(firstName: string, lastName: string, age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
}

// // Object/Instance of Customer class
let customer = new Customer("John", "Smith", 30);
customer.greeter();
customer.GetAge();

