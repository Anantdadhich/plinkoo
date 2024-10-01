/*import { ballRadius, HEIGHT, obstacleRadius, sinkwidth, WIDTH } from "../constants";
import { createobstacles, createSinks, Obstacle, Sink } from "../objects";
import { pad, unpad } from "../padding";
import { Ball } from "./ball";



export class Ballmanager{
    private balls:Ball[];
    private ctx:CanvasRenderingContext2D;
    private Canvasref:HTMLCanvasElement;
    private obstacles:Obstacle[]
    private sinks:Sink[]
    private requestId?:number;
    private onfinish?:(index:number,startX?:number)=>void;
    

   constructor(canvasRef:HTMLCanvasElement,onfinish?:(index:number,startX?:number)=>void){
    this.balls=[];
    this.Canvasref=canvasRef;
    this.ctx=this.Canvasref.getContext('2d')!;
    this.obstacles=createobstacles();
    this.sinks=createSinks();
    this.update();
    this.onfinish=onfinish;

   }

    addBall(startX?: number) {
      
        const newBall = new Ball(startX || pad(WIDTH / 2 + 13), pad(50), ballRadius, 'red', this.ctx, this.obstacles, this.sinks, (index) => {
            this.balls = this.balls.filter(ball => ball !== newBall);
            this.onfinish?.(index, startX)
        });
        this.balls.push(newBall);
    }

 
    drawobstacle(){
         this.ctx.fillStyle='white';
         this.obstacles.forEach((obstacle)=>{
            this.ctx.beginPath();
            this.ctx.arc(unpad(obstacle.x),unpad(obstacle.y),obstacle.radius,0,Math.PI*2);
            this.ctx.fill();
            this.ctx.closePath();
         })
    }
   
  getColor(index: number) {
        if (index <3 || index > this.sinks.length - 3) {
            return {background: '#ff003f', color: 'white'};
        }
        if (index < 6 || index > this.sinks.length - 6) {
            return {background: '#ff7f00', color: 'white'};
        }
        if (index < 9 || index > this.sinks.length - 9) {
            return {background: '#ffbf00', color: 'black'};
        }
        if (index < 12 || index > this.sinks.length - 12) {
            return {background: '#ffff00', color: 'black'};
        }
        if (index < 15 || index > this.sinks.length - 15) {
            return {background: '#bfff00', color: 'black'};
        }
        return {background: '#7fff00', color: 'black'};
    }

   drawsinks(){
     this.ctx.fillStyle='green'
     const spacing=obstacleRadius*2;
     for(let i=0;i<this.sinks.length;i++){
        this.ctx.fillStyle=this.getColor(i).background;
        const sink=this.sinks[i];
        this.ctx.font='normal 13px Arial';
        this.ctx.fillRect(sink.x,sink.y-sink.height/2,sink.width-spacing,sink.height);
        this.ctx.fillStyle=this.getColor(i).color;
        this.ctx.fillText((sink?.multiplier)?.toString()+'x',sink.x-15+sinkwidth/2,sink.y);


     }
     
   }
    

   draw(){
    this.ctx.clearRect(0,0,WIDTH,HEIGHT);
    this.drawobstacle();
    this.drawsinks();
    this.balls.forEach(ball=>{
        ball.draw();
        ball.update();

    })
   }
   
   update(){
    this.draw();
    this.requestId=requestAnimationFrame(this.update.bind(this));

   }

   stop(){
    if(this.requestId){
        cancelAnimationFrame(this.requestId);
    }
   }
}
   */
  import { HEIGHT, WIDTH, ballRadius, obstacleRadius } from "../constants";
import { Obstacle, Sink, createObstacles, createSinks } from "../objects";
import { pad, unpad } from "../padding";
import { Ball } from "./ball";

export class BallManager {
    private balls: Ball[];
    private canvasRef: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private obstacles: Obstacle[]
    private sinks: Sink[]
    private requestId?: number;
    private onFinish?: (index: number, startX?: number) => void;

    constructor(canvasRef: HTMLCanvasElement, onFinish?: (index: number, startX?: number) => void) {
        this.balls = [];
        this.canvasRef = canvasRef;
        this.ctx = this.canvasRef.getContext("2d")!;
        this.obstacles = createObstacles();
        this.sinks = createSinks();
        this.onFinish = onFinish;
        this.setupCanvas();
        this.update();
    }

    private setupCanvas() {
        // Set up a gradient background
        const gradient = this.ctx.createLinearGradient(0, 0, 0, HEIGHT);
        gradient.addColorStop(0, '#1a1a2e');
        gradient.addColorStop(1, '#16213e');
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, WIDTH, HEIGHT);
    }

    addBall(startX?: number) {
        const ballColor = this.getRandomBrightColor();
        const newBall = new Ball(
            startX || pad(WIDTH / 2 + 13),
            pad(50),
            ballRadius,
            ballColor,
            this.ctx,
            this.obstacles,
            this.sinks,
            (index) => {
                this.balls = this.balls.filter(ball => ball !== newBall);
                this.onFinish?.(index, startX)
            }
        );
        this.balls.push(newBall);
    }

    private getRandomBrightColor(): string {
        const hue = Math.random() * 360;
        return `hsl(${hue}, 100%, 50%)`;
    }

    private drawObstacles() {
        this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
        this.ctx.shadowColor = 'rgba(255, 255, 255, 0.5)';
        this.ctx.shadowBlur = 10;
        this.obstacles.forEach((obstacle) => {
            this.ctx.beginPath();
            this.ctx.arc(unpad(obstacle.x), unpad(obstacle.y), obstacle.radius, 0, Math.PI * 2);
            this.ctx.fill();
            this.ctx.closePath();
        });
        this.ctx.shadowBlur = 0;
    }
  
    private getColor(index: number) {
        const colors = [
            { background: '#ff003f', color: 'white' },
            { background: '#ff7f00', color: 'white' },
            { background: '#ffbf00', color: 'black' },
            { background: '#ffff00', color: 'black' },
            { background: '#bfff00', color: 'black' },
            { background: '#7fff00', color: 'black' }
        ];
        const colorIndex = Math.min(Math.floor(index / 3), colors.length - 1);
        return colors[colorIndex];
    }

    private drawSinks() {
        const SPACING = obstacleRadius * 2;
        this.sinks.forEach((sink, i) => {
            const { background, color } = this.getColor(i);
            this.ctx.fillStyle = background;
            this.ctx.fillRect(sink.x, sink.y - sink.height / 2, sink.width - SPACING, sink.height);
            
            // Add a glow effect
            this.ctx.shadowColor = background;
            this.ctx.shadowBlur = 10;
            this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
            this.ctx.strokeRect(sink.x, sink.y - sink.height / 2, sink.width - SPACING, sink.height);
            this.ctx.shadowBlur = 0;

            // Draw multiplier text
            this.ctx.fillStyle = color;
            this.ctx.font = 'bold 16px Arial';
            this.ctx.textAlign = 'center';
            this.ctx.fillText(`${sink.multiplier}x`, sink.x + (sink.width - SPACING) / 2, sink.y + 6);
        });
    }

    draw() {
        this.setupCanvas();  // Redraw the background
        this.drawObstacles();
        this.drawSinks();
        this.balls.forEach(ball => {
            ball.draw();
            ball.update();
        });
    }
    
    update() {
        this.draw();
        this.requestId = requestAnimationFrame(this.update.bind(this));
    }

    stop() {
        if (this.requestId) {
            cancelAnimationFrame(this.requestId);
        }
    }
}