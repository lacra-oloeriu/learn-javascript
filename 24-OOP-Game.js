const readline = require('readline-sync');

const say = (prompt) => {
    console.log(prompt);
} 

const die = (message) => {
    say(message);
    process.exit(1);
}


class Game {
    constructor(rooms = []) {
        this.hp = Math.floor(Math.random() * 10) + 1;
        this.addRooms(rooms)
    }

   // say(prompt) {
      //  console.log(prompt)
   // }
    //say("I started the game")

    //die(message) {
       // say(message);
       // process.exit(1);
    //}

    ask(prompt) {
        say(`[[You have $${this.hp} hit points.]]`);
        if (this.hp <= 0) {
            die("You died!");
        } else {
            return readline.question(prompt + ' ')
        }
    }

    addRoom(room) {
        this[room.name] = room;
        room.game = this;
    }

    addRooms(rooms) {
        for(let room of rooms) {
            this.addRoom(room)
        }
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
        say(" ");
        say("You enter the door and a spirit told you a rider.")
        this.game.hp 

        
        //console.log("Dor hp = ", this.hp);
        //console.log("Game hp = ", this.game.hp);

        //they have to  open the door to get goold
        // what puzle will they solve?
    }
}

class Spider extends Room {
    enter( ) {
        say(" ");
        say(" A big spider atac you and take you 2 point ");
        this.game.hp = this.game.hp - 2
        if(this.game.hp > 2) {
            say("you suvive and run back")
            this.game.rope.enter()
        }else  if ( this.game < 2) {
            say("You died!!!")
        } else {
            this.game.rope.enter()
        }

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
        say(" ")
        say("You are at the bottom of the well.");
        say("You see two doors.");
        let next = this.game.ask("What is the lucky door???");
        if (next === "right") {
            say("You enter the door and find the gold!!")
            //this.game.door.enter()
            //this.hp
        } else if (next === "left") {
            //this.game.say("A big spider attac you and takes 4 hp.")
            this.game.spider.enter()

        } else {
            say("You can't do that here.");
            this.game.well.enter();
        }

        // They are at the bottom of the well
        //They can  go through the door to the gold
        // or go take a wrong turn to the spider
    }
}

class Well extends Room {

    enter() {
        say(" ")
        say("You are walking through the woods and see a well.");
        say("Walking up to it and looking down you see a shiny thing at the bottom.");
        let next = this.game.ask("What do you do?");

        if (next === "climb") {
            say("You climb down the rope.");
            this.game.rope.enter();
        } else if (next === "jump") {
            say("Yikes! Let's see if you survive!");
            this.game.hit(2);
            this.game.rope.enter();
        } else {
            say("You can't do that here.");
            this.game.well.enter();
        }
    }
}

/*let game = new Game ([
new Well("well"),
new Rope("rope"),
new Gold("gold"),
new Spider("spider"),
new Door("door"),
])
*/

let game = new Game();

game.addRooms([
    new Well("well"),
    new Rope("rope"),
    new Gold("gold"),
    new Spider("spider"),
    new Door("door"),
])

//console.log(Object.entries(game));
game.play("well");

//game.play(15)