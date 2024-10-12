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
 <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-800 via-gray-900 to-black p-8">
      <div className="relative flex flex-col items-center">
        <canvas
          ref={canvasRef}
          height="800"
          width="800"
          className="border-4 border-gray-500 rounded-xl shadow-2xl"
        ></canvas>

        <div className="absolute top-6 right-6">
          <Button
            className="bg-gradient-to-r from-purple-500 to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-lg"
            onClick={async () => {
              const response = await axios.post(`${baseURL}/post`, { data: 1 });
              if (ballmanager) {
                ballmanager.addBall(response.data.point);
              }
            }}
          >
            Add Ball
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Game

