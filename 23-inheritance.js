class Guitar {
    constructor (color, name, wood) {
        this.color = color;
        this.name = name;
        this.wood = wood;
    }

    play(note) {

        console.log("Playing", note)
        console.log(`${this.name}: ${this.color}: ${this.wood}: plays ${note}`)
    }

}

class Jazzmaster extends Guitar {
    constructor (color, name, wood) {
        super(color, name, wood);
        this.volume = 0;
        this.tone = 0;
    }

    volume(level) {
        this.volume = level;
    }

    tone(level) {
        this.tone = level;
    }
}

class BassVI extends Jazzmaster {
    play(note) {
        console.log(`${note}`);
    }
}



//class Telecaster extends Guitar {
//    volum(level) {
  //      console.log("Volume", level)
  //  }
    //tone(level) {
    //    console.log("Tone", level)
   // }
//}


//let g1 = new Guitar();
//////g1.play("A");
//let t1 = new Telecaster
//t1.volum ("L")
//t1.tone("L1")

class Person {
    constructor(name, age, eyes) {
        this.name = name;
        this.age = age;
        //this.eyes = eyes;
    }

    talk(words) {
        console.log(`I am ${this.name} and ${words}.`)
    }
 }


class Musician extends Person {
    play(instrument, sheet_music) {
        for(let note of sheet_music) {
            instrument.play(note)
        }
    }
}

let babbington = new Musician("Roy Babbington", 78);
let harris = new Musician("Jet Harris", 71);
let taliesin = new BassVI("red", "Taliesin");
let golden = new BassVI("gold", "Golden Arm");

babbington.play(taliesin, ['a','b','c','d']);
harris.play(golden, ['a','b','c','d']);

//let alex = new Musician("Alex" , 16 , "green" )
//alex.talk("I am playing some tones")

//alex.play(t1, ["A", "B", "C", "D"])

