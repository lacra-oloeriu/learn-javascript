console.log("You are writting text to your scree.")
console.log("This is called 'standard output'.")
console.log("Tis staff in the ( ) is a string.")
console.log("Start a string with a double-quote.")
console.log("Write what you want.")
console.log("Then end with a double-quote.")

const myLog = (message) => {
    console.log(message);
}

const secondLog =(variable, message) =>{
    console.log("Varable = ", variable);
    console.log("Message = ", message);
}

myLog("Hello Bogdan");
secondLog(10, "Not good");
