const readline = require('readline-sync');

const say = (prompt) => {
    console.log(prompt)
}
say("I started the game")

const die = (message) => {
    say(message);
    process.exit(1);
}

class Game {
    constroctor(rooms) {
        this.hp = Math.floor(Math.random() * 10) + 1;
        this.addRooms(rooms)
    }

    ask(prompt) {
        say(`[[You have ${this.hp} hit points.]]`);
        if(this.hp <= 0) {
            die("You died");
        } else {
            return readline.question(prompt + '')
        }
    }
}

