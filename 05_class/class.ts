class ShapeBase {
    area: number;
    name: string;
    private color: string;

    constructor(name: string, width: number, height: number) {
        this.name = name;
        this.area = width * height;
        this.color = "pink";
    };

    shoutout() {
        return "I'm " + this.color + " " + this.name + " with an area of " + this.area + " cm squared."
    };
}

var square = new ShapeBase("square", 30, 30);

console.log(square.shoutout());
console.log("Area of Shape:" + square.area);
console.log("Name of Shape:" + square.name);
//console.log("Color of Shape:" + square.color); // Property ‘color’ is private and only accessible within class ’ShapeBase'
//console.log("Width of Shape:" + square.width); // Property ‘width’ does not exist on type ’ShapeBase'
// console.log("Height of Shape:" + square.height);
