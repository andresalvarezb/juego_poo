import { Monster } from "./Monster";

export class Game {
    _attack = 0
    _history = []
    constructor(hero, monster){
        this.hero = hero
        this.monster = monster
    }

    log(message){
        console.log(`[MESSAGE]: ${message}`);
        this._history.push(message);
    }

    look(){
        if (this.monster.life == 0) {
            this.monster = new Monster()
            return this.monster
        }
    }

    start(){
        this.log(`Start game at ${new Date().toString()}`)
    }

    end(){
        if(this.monster.life == 0){
            this.log(`Monster loser - ${new Date().toString()}`)
        }
        if (this.hero.life == 0) {
            this.log(`Hero loser - ${new Date().toString()}`)
        }
        this.log(`The end of the game at ${new Date().toString()}`)

    }

}