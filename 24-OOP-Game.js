const readline = require('readline-sync');

const say = (prompt) => {
    console.log(prompt)
}
say("I started the game")

const die = (message) => {
    say(message);
    process.exit(1);
}

