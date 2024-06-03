import { Creature } from "./Creature";

export class Hero extends Creature {
    constructor(name, life, maxLife, attack){
        super(name, life, maxLife, attack)
    }
}