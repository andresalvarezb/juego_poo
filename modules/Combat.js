import { Game } from "./Game";

export class Combat extends Game{
    constructor(hero, monster) {
        super(hero, monster);
    }

    init(){
        this.log(`Start combat at ${new Date().toString()}`)

    }

    play(){
         
    }
}