const readline = require('readline-sync');

class Game {
    constructor() {
        this.hp = Math.floor(Math.random() * 10) + 1;
        //this.addRooms(rooms)
    }

    say(prompt) {
        console.log(prompt)
    }
    //say("I started the game")

    die(message) {
        this.say(message);
        process.exit(1);
    }

    ask(prompt) {
        console.log(`[[You have $${this.hp} hit points.]]`);
        if (this.hp <= 0) {
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
        this.hp -= amount;
    }

}

class Room {
    constructor(name) {
        this.name = name;
    }

    enter() {
        console.log("Implement me!");
    }
}

class Door extends Room {
    enter() {
        //they have to  open the door to get goold
        // what puzle will they solve?
    }
}

class Spider extends Room {
    enter() {
        // they ebter here , and the spider takes 10 hit points
        // if they live then they can run away
    }
}

class Gold extends Room {
    enter() {
        // end the game , they win  if they get the gold
    }
}


class Rope extends Room {
    enter() {
        this.game.say(" ")
        this.game.say("You are at the bottom of the well.");
        this.game.say("You see two doors.");
        let next = this.game.ask("What is the lucky door???");
        if (next === "right") {
            this.game.say("You enter the door and find the gold!!")
            //this.game.door.enter()
            this.hp
        } else if (next === "left") {
            this.game.say("A big spider attac you and takes 4 hp.")
            this.game.spider.enter()

        } else {
            this.game.say("You can't do that here.");
            this.game.well.enter();
        }

        // They are at the bottom of the well
        //They can  go through the door to the gold
        // or go take a wrong turn to the spider
    }
}

class Well extends Room {

    enter() {
        this.game.say(" ")
        this.game.say("You are walking through the woods and see a well.");
        this.game.say("Walking up to it and looking down you see a shiny thing at the bottom.");
        let next = this.game.ask("What do you do?");

        if (next === "climb") {
            this.game.say("You climb down the rope.");
            this.game.rope.enter();
        } else if (next === "jump") {
            this.game.say("Yikes! Let's see if you survive!");
            this.game.hit(5);
            this.game.rope.enter();
        } else {
            this.game.say("You can't do that here.");
            this.game.well.enter();
        }
    }
}

let game = new Game();
game.addRoom(new Well("well"));
game.addRoom(new Rope("rope"));
game.addRoom(new Gold("gold"));
game.addRoom(new Spider("spider"));
game.addRoom(new Door("door"));
console.log(Object.entries(game));
game.play("well");

//game.play(15)