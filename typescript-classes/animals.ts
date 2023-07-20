class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound = () => console.log("Grrraawwwwrrr!");
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name);
        this.breed = breed;
    }

    makeSound = () => console.log("Woof woof!");
}

const myDog = new Dog("Buddy", "Labrador Retriever");
console.log(myDog.name);
myDog.makeSound();