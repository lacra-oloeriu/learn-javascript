const readline = require('readline-sync');

class Game {
    constroctor() {
        this.hp = Math.floor(Math.random() * 10) + 1;
        //this.addRooms(rooms)
    }



 say (prompt) {
    console.log(prompt)
}


//say("I started the game")

 die (message)  {
    say(message);
    process.exit(1);
}

ask(prompt) {
    console.log(`[[You have $${this.hp} hit points.]]`);
    if(this.hp <= 0) {
        this.die("You died!");
    } else {
        return readline.question(prompt + ' ')
    }
} 

addRoom(room) {
    this[room.name] = room;
    room.game = this;
}

play(name) {
    this[name].enter();
}

hit(amount) {
    this.hp -=amount;
}

}

class Room {
    constructor (name) {
        this.name = name;
    }

    enter () {
        console.log("Implement me!");
    }
}












