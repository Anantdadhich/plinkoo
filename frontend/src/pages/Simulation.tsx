import  { useEffect, useRef, useState } from 'react'
import { BallManager } from '../games/classes/ballmanager';
import { pad } from '../games/padding';
import { WIDTH } from '../games/constants';



const Simulation = () => {

  const canvasRef=useRef<any>();
  let [outputs,setoutputs]=useState<{[key:number]:number[]}>({
       0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: [],
    10: [],
    11: [],
    12: [],
    13: [],
    14: [],
    15: [],
    16: [],
    17: [],
  })

  async function simulate(ballmanager:BallManager){
    let i=0;
    while(1){
      i++;
      ballmanager.addBall(pad(WIDTH/2 +20* (Math.random()-0.5)))
      await new Promise((resolve)=>setTimeout(resolve,1000));

    }
  }

  useEffect(()=>{
    if(canvasRef.current){
      const ballmanager=new BallManager(
        canvasRef.current as unknown as  HTMLCanvasElement,
        (index:number,startX?:number)=>{
          setoutputs((outputs:any)=>{
            return {
              ...outputs,
              [index]:[...(outputs[index]as number[]),startX]
            }
          });

        }
      );
      simulate(ballmanager)

      return ()=>{
        ballmanager.stop();
      }
    }
  },[canvasRef])
  return (
   
      <div className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-between p-6 bg-gradient-to-b from-gray-900 to-black overflow-hidden">
      {/* Output Section */}
      <div className="w-full lg:w-1/3 h-1/2 lg:h-full overflow-auto bg-gray-800 bg-opacity-60 rounded-xl shadow-xl p-4 m-4">
        <pre className="text-sm text-gray-300 font-mono">
          {JSON.stringify(outputs, null, 2)}
        </pre>
      </div>

      {/* Canvas Section */}
      <div className="flex items-center justify-center flex-grow">
        <canvas
          ref={canvasRef}
          height="800"
          width="800"
          className="border-4 border-purple-500 rounded-xl shadow-2xl max-w-full max-h-full"
        ></canvas>
      </div>
    </div>
 
  )
}

export default Simulation