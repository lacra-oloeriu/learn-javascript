
const say = (prompt) => {
    console.log(prompt);
}

const ask = (hp, prompt) => {
    console.log(`[[You have ${hp} hit points.]]`);
}

const well = (hp) => {
    say("You are walking through the woods and see a well.");
    say("Walking up to it ans looking down");
    say("You see a shiny thing at the bottom");
    
}

well(10);
ask(10);