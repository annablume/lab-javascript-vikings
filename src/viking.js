// Modify the Soldier class 
// and add 2 methods to it: 
// attack(), and receiveDamage().


// Soldier
class Soldier {
    constructor(health, strength) {
        this.health = health;
        this.strength = strength;
        }
        // should receive 0 arguments
        attack() {
        // should return the strength property of the Soldier
        return this.strength;
        };
        // should receive 1 argument (the damage)
        receiveDamage(damage) {
        // should remove the received damage from the health property
        this.health -= damage;
    }; 
};

// Viking
class Viking extends Soldier {
    constructor(name, health, strength) {
    this.name = name;
    }
    this.attack() {
        return this.strength;
    }
    
}

// Saxon
class Saxon {
    constructor() {}
}

// War
class War {
    constructor() {}
}
