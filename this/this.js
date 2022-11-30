// example 1
// const circle = {
// 	radius: 5,
// 	getDiameter() {
// 		return 2 * this.radius;
// 	},
// };

// console.log(circle.getDiameter());

// example 2
function Circle(radius) {
	this.radius = radius;
}

Circle.prototype.getDiameter = function () {
	return 2 * this.radius;
};

const circle = new Circle(5);
console.log(circle.getDiameter());
