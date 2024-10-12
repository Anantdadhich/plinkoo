
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { LampContainer } from '../components/ui/lamp';
import {motion} from  "framer-motion"
import { Sparkles } from 'lucide-react';

const Home = () => {
  const router = useNavigate();

  return (
   <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        Plinko  <br /> Drop your Ball 
      </motion.h1>
     <div className='flex gap-6 pt-12'>
       <Button
              onClick={() => router("/game")}
              className="bg-gradient-to-r from-indigo-400 to-blue-500 text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <Sparkles className="w-6 h-6" />
              <span>Play Now</span>
            </Button>
            <Button
              onClick={() => router("/simulation")}
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center space-x-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span>Simulate</span>
            </Button>
     </div>
    </LampContainer>
  );
}

export default Home;

