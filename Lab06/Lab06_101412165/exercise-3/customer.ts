class Customer {
    private firstName: string;
    private lastName: string;
        
    public greeter(){
        console.log(`Hello ${this.firstName} ${this.lastName}`);
    }

    constructor(firstName: string, lastName: string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

// // Object/Instance of Customer class
let customer = new Customer("John", "Smith");
customer.greeter();