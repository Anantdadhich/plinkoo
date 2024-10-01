/*import { HEIGHT, NUM_SINKS, obstacleRadius, sinkwidth, WIDTH } from "./constants";
import { pad } from "./padding";


export interface Obstacle{
    x:number,
    y:number,
    radius:number
}

export interface Sink{
    x:number;
    y:number;
    width:number;
    height:number;
    multiplier?:number;
}


const MULTIPLIERS:{[key:number]:number}={
 0:16,
 1:9,
 2:2,
 3:1.4,
 4:1.4,
 5:1.2,
 6:1.1,
 7:1,
 8:0.5,
 9:1,
 10:1.1,
 11:1.2,
 12:1.4,
 13:1.4,
 14:2,
 15:9,
 16:16

}

export const createobstacles=():Obstacle[]=>{
 const obsatcles:Obstacle[]=[];
 const rows=18;
 //for the rows
 for(let row=2;row<rows;row++){
    const noofobsatcles=row+1;
    const spacing=36;  //space around the obstacles
    const y=0+row*35;  //we calculate the y-position

    for(let col=0;col<noofobsatcles;col++){
        //x-position
       const x=WIDTH-spacing*(row/2-col);
       obsatcles.push({x:pad(x),y:pad(y),radius:pad(obstacleRadius)})
    }
 }
 return obsatcles;
}

export const createSinks=():Sink[]=>{
  const sinks=[];
 const SPACING=obstacleRadius*2;

 for(let i=0;i<NUM_SINKS;i++){
  //for the x position
  const x=WIDTH/2 +sinkwidth*(i-Math.floor(NUM_SINKS/2) -SPACING*1.5)
  //for the y position
  const y=HEIGHT-170;
  const width=sinkwidth;
  const height=width;
  sinks.push({x,y,width,height,multiplier:MULTIPLIERS[i+1]});
 }
return sinks;
}
*/
import { HEIGHT, NUM_SINKS, WIDTH, obstacleRadius, sinkwidth, } from "./constants";
import { pad } from "./padding";

export interface Obstacle {
    x: number;
    y: number;
    radius: number;
}

export interface Sink {
    x: number;
    y: number;
    width: number;
    height: number;
    multiplier?: number;
}

const MULTIPLIERS: {[ key: number ]: number} = {
    1: 16,
    2: 9,
    3: 2,
    4: 1.4,
    5: 1.4,
    6: 1.2,
    7: 1.1,
    8: 1,
    9: 0.5,
    10: 1,
    11: 1.1,
    12: 1.2,
    13: 1.4,
    14: 1.4,
    15: 2,
    16: 9,
    17: 16
}

export const createObstacles = (): Obstacle[] => {
    const obstacles: Obstacle[] = [];
    const rows = 18;
    for (let row = 2; row < rows; row++) {
        const numObstacles = row + 1;
        const y = 0 + row * 35;
        const spacing = 36;
        for (let col = 0; col < numObstacles; col++) {
            const x = WIDTH / 2 - spacing * (row / 2 - col);
            obstacles.push({x: pad(x), y: pad(y), radius: obstacleRadius });
        }   
    }
    return obstacles;
}

export const createSinks = (): Sink[] => {
    const sinks = [];
    const SPACING = obstacleRadius * 2;

    for (let i = 0; i < NUM_SINKS; i++) {
      const x = WIDTH / 2 + sinkwidth * (i - Math.floor(NUM_SINKS/2)) - SPACING * 1.5;
      const y = HEIGHT - 170;
      const width = sinkwidth;
      const height = width;
      sinks.push({ x, y, width, height, multiplier: MULTIPLIERS[i+1] });
    }

    return sinks;
}