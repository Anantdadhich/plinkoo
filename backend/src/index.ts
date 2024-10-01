import express from "express"
import cors from "cors"
import { outcomes } from "./outcomes";
const app=express();
app.use(cors());

const TOTAL_DROPS=16;

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


app.post("/post",(req,res)=>{
let outcome=0;
const arrayofpattern=[];
for(let i=0;i<TOTAL_DROPS;i++){
    if(Math.random() > 0.5){
      arrayofpattern.push('R');
      outcome++;
    }else{
        arrayofpattern.push('L');
    }
}
 
const multiplierscal=MULTIPLIERS[outcome];
const possibleoutcomes=outcomes[outcome];


res.send({
    point: possibleoutcomes[Math.floor(Math.random() * possibleoutcomes.length ||0)] ,
    multiplierscal,
    arrayofpattern
})


})

app.listen(3000);