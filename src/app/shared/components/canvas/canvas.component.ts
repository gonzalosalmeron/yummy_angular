import { AfterViewInit, Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { cursorTo } from 'readline';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {

	// recogemos el canvas de la vista
	@ViewChild('canvas', { static: false }) canvas: any
	cx!: CanvasRenderingContext2D;
	points: Array<any> = [];

	@HostListener('document:mousemove', ['$event'])
	onMouseMove = (e: any) => {
		if (e.target.id === 'canvasYummy') {
			this.write(e)
		}
	}

	width = 400;
	height = 400;

	ballX = 50;
	ballY = 50;

	constructor() {

	}

	ngOnInit(): void {
	}

	ngAfterViewInit(): void {
		this.render()
	}

	private render(): any {
		const canvasEl = this.canvas.nativeElement;
		this.cx = canvasEl.getContext('2d');

		canvasEl.width = window.innerWidth / 2.2;
		canvasEl.height = window.innerHeight /1.25;
	}

	private write(res : any){
		const canvasEl: any = this.canvas.nativeElement;
		const rect = canvasEl.getBoundingClientRect();
		const prevPos = {
			x: res.clientX - rect.left,
			y: res.clientY - rect.top,
		};
		this.writeSingle(prevPos);
	}

	private writeSingle (prevPos : any) {
		this.points.push(prevPos);
		if (this.points.length > 3) {
		const prevPost = this.points[this.points.length - 1]
		const currentPos = this.points[this.points.length - 2]

		this.drawOnCanvas(prevPost, currentPos);
		}
	}

	private drawOnCanvas(prevPos: any, currentPos: any) {
		if (!this.cx) {
		return;
		}
		this.cx.beginPath();
		if (prevPos) {
			var dx = (currentPos.x - this.ballX) * .125;
			var dy = (currentPos.y - this.ballY) * .125;

			// calcula la distancia que se tiene que mover
			var distance = Math.sqrt(dx*dx + dy*dy);
			// lo limita a 5px
			if(distance > 5){
				dx *= 5/distance;
				dy *= 5/distance;
			}

			this.ballX += dx;
			this.ballY += dy;

			this.cx.clearRect(0, 0, window.innerWidth, window.innerHeight);

			this.cx.beginPath();
			this.cx.arc(this.ballX, this.ballY, 10, 0, 2 * Math.PI);
			this.cx.fillStyle = 'transparent';
			this.cx.fill();
			this.cx.shadowColor = 'rgba(128, 128, 128, 0.669)';
			this.cx.shadowBlur =15;
			this.cx.lineWidth = 10;
			this.cx.strokeStyle = 'rgba(128, 128, 128, 0.669)';
			this.cx.stroke();
		}
	}

}
