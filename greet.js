var Greeter = /** @class */ (function () {
    function Greeter() {
        this.greeting = "Francis";
    }
    Greeter.prototype.greet = function () {
        return "Hello Alan, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter();
console.log(greeter.greet());
