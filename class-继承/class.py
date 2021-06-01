class Animal():
    def __init__(self, sex):
        self.sex = sex;
    def eat(self):
        print("eat");
    def getSex(self):
        print("sex", self.sex)

class Human(Animal):
    def __init__(self, sex):
        super().__init__(sex)
    def walk(self):
        print("walk")

human = Human(1);
human.getSex();
human.eat();
human.walk();