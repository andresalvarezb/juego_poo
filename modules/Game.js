class Game {
    _history = []
    constructor(monster){
        this.monster = monster
 
    }

    log(message){
        console.log(message);
        this._history.push(message);
    }
}