import React from "react";
import Card from "../components/Card";
import AnimatedCountdown from "../components/Animatedcountdown";
const Home = ({ time }) => {
  return (
    <main className="p-6 flex flex-col items-center justify-center gap-6">
      <h1 className="text-lg md:text-2xl font-semibold text-center">
        Forever starts with you.
      </h1>

      <Card>
        <p className="text-sm font-semibold mb-2">💕 Together For</p>
        <AnimatedCountdown time={time} />
      </Card>

      {/* Period Tracking Section */}
      <div className="text-center flex flex-col items-center gap-4 margin-top">
        <p className="text-lg md:text-xl font-light">
          Monitor Your Cycle, Stay Vibrant! 🌸
        </p>
        <button className="flex items-center gap-2 bg-transparent border border-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 white-border margin-bottom">
          <span className="text-lg">👁️</span>
          <span>Track Period</span>
        </button>
      </div>

      {/* Memory Section */}
      <div className="text-center flex flex-col items-center gap-4">
        <p className="text-lg md:text-xl font-light">
          A Moment To Remember, Forever Ours 💾
        </p>
        <button className="flex items-center gap-2 bg-transparent border border-gray-500 text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 white-border margin-bottom">
          <span className="text-lg">💫❤️</span>
          <span>Save Our Memories</span>
        </button>
      </div>
    </main>
  );
};

export default Home;
