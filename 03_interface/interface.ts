interface Shape {
    name: string;
    width: number;
    height: number;
    color?: string;
}

function areaInterface(shape: Shape) {
    var area = shape.width * shape.height;
    return "I'm " + shape.name + " with area " + area + " cm squared.";
}

console.log(areaInterface({ name: "rectangle", width: 30, height: 15 }));
console.log(areaInterface({ name: "square", width: 30, height: 30, color:"blue" }));
