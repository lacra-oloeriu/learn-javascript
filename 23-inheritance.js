class Guitar {
    constructor (color, name, wood) {
        this.color = color;
        this.name = name;
        this.wood = wood;
    }

    play(note) {

        console.log("Playing", note)
       // console.log(`${this.name}: ${this.color}: ${this.wood}: plays ${note}`)
    }



}


let g1 = new Guitar();
g1.play("A")

//console.log("Playing", note)