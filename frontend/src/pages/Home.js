import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center space-y-5 bg-gray-200">

      {/* header */}
      <h1 className="mt-4 text-4xl font-bold pb-3 italic">Welcome to AlgoSim!</h1>

      <Link to="/add">
        <div className="min-w-[22rem] rounded-xl bg-teal-300 p-4 text-center text-2xl font-bold shadow-2xl duration-300 hover:bg-teal-900 hover:text-teal-200">
          Click me to add numbers.
        </div>
      </Link>

      <Link to="/raw-bars">
        <div className="min-w-[22rem] rounded-xl bg-teal-400 p-4 text-center text-2xl font-bold shadow-2xl duration-300 hover:bg-teal-900 hover:text-teal-200">
          Click me to see raw bars.
        </div>
      </Link>

      <Link to="/graph">
        <div className="min-w-[22rem] rounded-xl bg-teal-500 p-4 text-center text-2xl font-bold shadow-2xl duration-300 hover:bg-teal-900 hover:text-teal-200">
          Click me to see graphs.
        </div>
      </Link>

    </div>
  );
}

export default Home;