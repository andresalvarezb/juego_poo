import { Creature } from "./Creature";

export class Monster extends Creature{
    constructor(name, life, maxLife, attack){
        super(name, life, maxLife, attack)
    }
}