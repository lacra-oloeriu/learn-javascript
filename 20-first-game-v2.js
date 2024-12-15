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

const gold = (hp) => {
     // they have to open the door to get the gold
    // what kind of puzzle will they solve?  
    say("");
    say("You fimd the gold  protedted by a spirit");
    say("The spirit asks you: ");
    say("   Buzzing around, I make sweet gold,");
    say("   In a hive, my work unfolds.");
    
    
    let answer = ask(hp, "   What am I? ");
    say("");
    if (answer === "a bee"){
        say("You are wrich. You won the game. YES !!!!!!. CONCGRATS");
    } else{
        say ("No gold for you. But atleast you did not died. Game over");
    }
    
};

const spider = (hp) => {
    say("")
    say ("You enter and you find a spider");
    say ("The spider takes you 10 hit points"); 
    hp = hp -10;
    if (hp > 10) {
        say("You suvive and run back.")
        rope(hp);
    } else {
        say("you died!")
    }

        // they enter here, and the spider takes 10 hit points
        // if they live then they can run away
};




const rope = (hp) => {
    // they are at the bottom of the well
    // they can go through the door to the gold
    // or go take a wrong turn to the spider
    say("");
    say ("You are at the botton of the well.");
    say ("You see two doors.")
    let next = ask ( hp, "Wich one you chose? The left or right one? ");
    if (next ==="left" ) {
       // say("To be implemented. I need to go to the sider");
        spider(hp);
    }else if (next === "right") {
        //say("To be implemented. I need to go to find the gold");
        gold(hp);
    }

}


const well = (hp) => {
    say("");
    say("You are walking through the woods and see a well.");
    say("Walking up to it ans looking down");
    say("You see a shiny thing at the bottom");
    let next = ask(hp, "What do you do?: ");
    if(next === "climb") {
        say("You climb down the rope.");
        rope(hp);
    } else if(next === "jump") {
        say("Yikes! Let's see if you survive!");
        hp = Math.floor(hp / 2);
        rope(hp);
    } 
    else {
        say("You can't do that here.");
        well(hp);
    }
    
}

let hp = Math.floor(Math.random() * 10) + 1;

well(25);
