class Point {
	constructor(width, height) {
		this.x = Math.random() * width;
		this.y = Math.random() * height;
		this.label;
		if (this.x > this.y) {
			this.label = 1;
		} else {
			this.label = -1;
		}
	}
	
	show() {/*
		if (this.label == 1) {
			ctx.fillStyle = "blue";
			
		} else {
			ctx.fillStyle = "orange";
		}
		*/
		ctx.beginPath();
		ctx.arc(this.x, this.y, 8, 0, Math.PI * 2);
		ctx.fill();
		ctx.closePath();
	}
	
}