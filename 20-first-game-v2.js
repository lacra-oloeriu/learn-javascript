const readline = require('readline-sync');

const say = (prompt) => {
    console.log(prompt);
}

const die = ( message) => {
    say(message);
    process.exit(1);
}

const ask = (hp, prompt) => {
    console.log(`[[You have ${hp} hit points.]]`);
    if (hp <= 0 ) {
        die("You died!");
    }else {
        return readline.question(prompt + '');
    }
   
    }

    const door = (hp) => {
        if (hp > 0 ) {
            say("You didn't make it!");
        } else {
            door("You open the door and get the gold.");
        }
        ask(hp, "What do you do now?")
    }

const rope = (hp) => {
    if (hp < 0 ) {
        die("You didn't make it.");
    }else {
        say("You made it!");
    }
    ask( hp, "What's next?");
}


const well = (hp) => {
    say("You are walking through the woods and see a well.");
    say("Walking up to it ans looking down");
    say("You see a shiny thing at the bottom");
    let next = ask(hp, "What do you do?");
    if(next === "climb") {
        say("You climb down the rope.");
        rope(hp);
    } else if(next === "jump") {
        say("Yikes! Let's see if you survive!");
        hp = Math.floor(hp / 2);
        rope(hp);
    } else if (next ==="door") {
        say("open the door and find the gold.");
        door(hp);
    }else {
        say("You can't do that here.");
        well(hp);
    }

    
    
}

//let hp = Math.floor(Math.random() * 10) + 1;

well(10);
