class Rectangle {
    height;
    width;
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getArea() {
        return this.height * this.width;
    }
    getPerimeter() {
        return 2 * (this.height + this.width);
    }
    setWidth(width) {
        this.width = width;
     //   return this.width;
    }
    setHeight(height) {
        this.height = height;
     //   return this.height;
    }
    draw() {
        let ctx = document.getElementById('canvas').getContext('2d');
        ctx.beginPath();
        ctx.rect(50, 50, this.width, this.height);
        ctx.stroke();
        ctx.closePath();
    }
}
let hcn = new Rectangle(300,200);
hcn.setWidth(250);
hcn.draw();
let a = hcn.getArea();
alert(a);