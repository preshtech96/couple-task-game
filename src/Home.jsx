import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskDisplay from "./components/TaskDisplay";
import Lottie from "lottie-react";
import loading from "./assets/loading.json";

function Home() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const yourName = queryParams.get("yourName") || "Player 1";
  const partnerName = queryParams.get("partnerName") || "Player 2";

  const [selectedTask, setSelectedTask] = useState(null);
  const [showWelcome, setShowWelcome] = useState(true);
  const [currentPlayer, setCurrentPlayer] = useState("yourName");
  const [yourCompleted, setYourCompleted] = useState(0);
  const [partnerCompleted, setPartnerCompleted] = useState(0);

  const handlePickTask = () => {
    const randomIndex = Math.floor(Math.random() * TaskList.length);
    const randomTask = TaskList[randomIndex];
    setSelectedTask(randomTask);
  };

  const handleTaskDone = () => {
    if (currentPlayer === "yourName") {
      setYourCompleted((prev) => prev + 1);
    } else {
      setPartnerCompleted((prev) => prev + 1);
    }
    setSelectedTask(null);
    setCurrentPlayer((prev) => (prev === "yourName" ? "partnerName" : "yourName"));
  };

  const handleTaskSkipped = () => {
    setSelectedTask(null);
    setCurrentPlayer((prev) => (prev === "yourName" ? "partnerName" : "yourName"));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col gap-2">
      <div className="text-center py-4 flex justify-around">
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold text-indigo-700">
            👤 {yourName} <span className="text-sm text-gray-500">({yourCompleted} done)</span>
          </h2>
          {currentPlayer === "yourName" && (
            <span className="text-green-600 text-sm font-semibold animate-pulse">🎮 Now Playing</span>
          )}
        </div>
        <div className="flex flex-col items-center">
          <h2 className="text-xl font-bold text-pink-600">
            🧕 {partnerName} <span className="text-sm text-gray-500">({partnerCompleted} done)</span>
          </h2>
          {currentPlayer === "partnerName" && (
            <span className="text-green-600 text-sm font-semibold animate-pulse">🎮 Now Playing</span>
          )}
        </div>
      </div>

      {showWelcome ? (
        <div className="flex justify-center font-extrabold flex-col items-center">
          <h1 className="text-blue-900 font-extrabold text-[30px] text-center">
            Hey! Welcome to PreshTech Task Game. Are you ready to complete the
            task? 🤗😉
          </h1>
          <h1 className="text-pink-600 font-extrabold text-[30px]">
            Let's get started
          </h1>

          <div className="h-[300px] w-[300px] m-[-150px]">
            <Lottie animationData={loading} loop={true} autoPlay={true} />
          </div>
        </div>
      ) : (
        <>
          <div className="flex justify-center font-extrabold">
            <h1>Kindly pick a task</h1>
          </div>

          <div className="flex flex-wrap gap-4 px-5 justify-center">
            {[...Array(64)].map((_, index) => (
              <button
                key={index}
                className="bg-blue-900 p-2 text-white font-bold rounded-[5px] cursor-pointer hover:bg-white hover:text-blue-900 border border-blue-900"
                onClick={handlePickTask}
              >
                {`Pick Task`}
              </button>
            ))}
          </div>

          <div className="flex justify-center mt-5">
            <h1 className="text-[30px] font-extrabold text-blue-950 border-2 px-3 rounded-[5px]">
              Your task below
            </h1>
          </div>

          <TaskDisplay task={selectedTask} />

          {selectedTask && (
            <div className="flex justify-center gap-4 mt-4">
              <button
                onClick={handleTaskDone}
                className="bg-green-600 text-white px-4 py-2 rounded font-bold hover:bg-green-700"
              >
                ✅ Task Completed
              </button>
              <button
                onClick={handleTaskSkipped}
                className="bg-red-600 text-white px-4 py-2 rounded font-bold hover:bg-red-700"
              >
                ❌ Task Not Completed
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Home;
