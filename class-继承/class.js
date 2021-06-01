
const print = console.log

class Animal {

    constructor(sex) {
        this.sex = sex;
    }

    getSex() {
        print("sex", this.sex);
    }

    eat() {
        print("eat")
    }

}


class Human extends Animal {

    constructor(sex) {
        super(sex)
    }

    walk() {
        print("walk");
    }

}

var human = new Human(1, 0);
human.getSex();
human.eat();
human.walk();

