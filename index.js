const userInformation = require("./information.js");

var cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hello, I'm ${userInformation.name} from ${userInformation.campus} Campus`,
    e: "oO",
    T: "U "
}));
