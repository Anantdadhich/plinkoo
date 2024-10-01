
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/Button';

const Home = () => {
  const router = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-black text-white p-4">
      <div className="text-center mb-12">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-neutral-200 to-neutral-600 animate-text-shine">
          Plinko
        </h1>
        <p className="mt-4 text-xl text-gray-300">Get ready for an exciting game of chance!</p>
      </div>
      <div className="flex gap-6">
        <Button
          onClick={() => router("/game")}
          className="bg-gradient-to-r from-neutral-700 to-gray-700 text-gray-300 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Play Now
        </Button>
        <Button
          onClick={() => router("/simulation")}
          className="bg-gradient-to-r  from-neutral-700 to-gray-700 text-gray-300 font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105 hover:shadow-lg"
        >
          Simulate
        </Button>
      </div>
    </div>
  );
}

export default Home;