class Ninja {
    constructor(name){
        this.name= name;
        this.health =100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(`My name is  ${this.name}`);
    }
    showStats(){
        console.log(`My name is  ${this.name}  my health  ${this.health} My speed ${this.speed} My strength ${this.strength}`);
    }
    drinkSake(){
        this.health += 10;
    }
}
class Sensei extends Ninja{
constructor(name){
super(name);
this.wisdom=10;}
speakWisdom(){
console.log('What one programmer can do in one month, two programmers can do in two months.');
}

}

// const ninja1 = new Ninja("Hyabusa");
// ninja1.sayName();
// ninja1.drinkSake();
// ninja1.showStats();
const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
// -> "What one programmer can do in one month, two programmers can do in two months."
superSensei.showStats();

