const readline = require('readline-sync');

class Game {
    constroctor(rooms) {
        this.hp = Math.floor(Math.random() * 10) + 1;
        this.addRooms(rooms)
    }
}





const say = (prompt) => {
    console.log(prompt)
}


say("I started the game")

const die = (message) => {
    say(message);
    process.exit(1);
}





