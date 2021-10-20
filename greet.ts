class Greeter {
    greeting: string;
    constructor() {
        this.greeting = "Francis";
    }
    greet() {
        return "Hello Alan, " + this.greeting;
    }
}

let greeter = new Greeter();
console.log(greeter.greet());
