import  { useEffect, useRef, useState } from 'react'
import { BallManager } from '../games/classes/ballmanager'

import { Button } from '../components/ui/Button';
import axios from 'axios';
  
const baseURL="http://localhost:3000";

const Game = () => {
  
  const [ballmanager,setballmanager]=useState<BallManager>();
  const canvasRef=useRef<any>();

  useEffect(()=>{
    if(canvasRef.current){
      const ballmanager=new BallManager(
        canvasRef.current as unknown as HTMLCanvasElement
      );
      setballmanager(ballmanager);
    }
  },[canvasRef]);
   




  return (
   <div  className=" flex items-center justify-center bg-gradient-to-b from-gray-900 to-black p-4">
      <div className="relative">
        <canvas
          ref={canvasRef} height="800" width="800"
          className="border-4 border-gray-300 rounded-lg shadow-lg"
        ></canvas>
        <div className="absolute top-12 right-4">
          <Button className='bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg' onClick={async()=>{
        const response=await axios.post(`${baseURL}/post`,
          {data:1}
        )
        if(ballmanager){
          ballmanager.addBall(response.data.point);
        }
       }}>
       Add ball
       </Button>

        </div>
      </div>
    </div>
  )
}

export default Game

