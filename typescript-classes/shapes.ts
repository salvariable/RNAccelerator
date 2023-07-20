class Shape {
    color: string;

    constructor(color: string) {
        this.color = color;
    }

    getArea(): void {
        new Error();
    }
}

class Circle extends Shape {
    radius: number

    constructor(color: string, radius: number) {
        super(color);
        this.radius = radius;
    }

    getArea(): number {
        return Math.PI * (this.radius * this.radius)
    }
}

class Rectangle extends Shape {
    width: number;
    height: number;

    constructor(color: string, width: number, height: number) {
        super(color);
        this.width = width;
        this.height = height;
    }

    getArea(): number {
        return this.width * this.height;
    }
}

const myCircle = new Circle("red", 5);
console.log("myCircle's area: ", myCircle.getArea());

const myRectangle = new Rectangle("blue", 4, 6);
console.log("myRectangle's area: ", myRectangle.getArea());