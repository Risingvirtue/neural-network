var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 800;
//activation function
function sign(n) {
	if (n >= 0) {
		return 1;
		
	} else {
		return -1;
	}
}
class Perceptron {
	constructor() {
		//initialize weights randomly
		this.weights = [];
		this.lr = 0.1;
		for (var i = 0; i < 2; i++) {
			//-1 to 1
			this.weights.push(Math.random() * 2 - 1);
		}
	}
	
	guess(inputs) {
		var sum = 0;
		for (var  i =0; i < this.weights.length; i++) {
			sum += inputs[i] * this.weights[i];
		}
		return sign(sum);
	}
	
	train(inputs, target) {
		var guess = this.guess(inputs);
		var err = target - guess;
		
		for (var i = 0; i < this.weights.length; i++) {
			this.weights[i] += err * inputs[i]  * this.lr;
		}
	}
}
var p = new Perceptron();
var points = [];
var currPoint = 0;
$(document).ready(function(){
	
	ctx.beginPath();
	ctx.moveTo(0,0);
	ctx.lineTo(canvas.width, canvas.height);
	ctx.stroke();
	ctx.closePath();
	for (var i = 0; i < 100; i++) {
		points.push(new Point(canvas.width, canvas.height));
	}
	
	interval = setInterval(train, 200);
	
	
	

});

function train() {
		var pt = points[currPoint];
		currPoint++;
		if (currPoint == 100) {
			clearInterval(interval);
		}
		var inputs = [pt.x, pt.y];
		var guess = p.guess(inputs);
		if (guess == pt.label) {
			ctx.fillStyle = 'green';
		} else {
			ctx.fillStyle = 'red';
		}
		p.train(inputs, pt.label);
		pt.show();
		var slope = -p.weights[1] / p.weights[0];
		console.log(slope);
		ctx.beginPath();
		ctx.moveTo(0,0);
		ctx.lineTo(canvas.height * slope, canvas.height);
		ctx.stroke();
		ctx.closePath();
		
	}