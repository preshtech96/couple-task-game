import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const GameInstruction = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const queryParams = new URLSearchParams(location.search);
  const yourName = queryParams.get("yourName") || "Player 1";
  const partnerName = queryParams.get("partnerName") || "Player 2";

  const handleStartGame = () => {
    navigate(`/Home?yourName=${encodeURIComponent(yourName)}&partnerName=${encodeURIComponent(partnerName)}`);

  };
  

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      
      <div className="bg-white shadow-lg rounded-2xl p-6 text-center mb-10">
        <h2 className="text-3xl font-bold mb-2">🎮 Welcome to Task Game!</h2>
        <p className="text-lg">
          Hello <strong>{yourName}</strong> and <strong>{partnerName}</strong>,<br />
          Get ready to conquer your goals together!
        </p>
      </div>

     
      <section className="space-y-8">
        <article>
          <h2 className="text-2xl font-semibold text-indigo-700 mb-2">🚀 PreshTech Task Game</h2>
          <p className="text-gray-700 text-lg">
            Conquer Your Goals, One Challenge at a Time!
          </p>
        </article>

        <article>
          <h3 className="text-xl font-semibold text-indigo-700">🎯 What is Task Quest?</h3>
          <p className="text-gray-700">
            Task Quest is an interactive game that transforms your everyday tasks into epic challenges. Whether you're working, studying, or building new habits, this game adds excitement, rewards, and a little friendly competition to your daily grind.
          </p>
        </article>

        <article>
          <h3 className="text-xl font-semibold text-indigo-700">📋 How It Works</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Pick a task randomly and complete it</li>
            <li>Every task is fun and must be completed with love ❤️</li>
            <li>Earn points for each completed task</li>
            <li>Challenge your partner and win rewards</li>
          </ul>
        </article>
      </section>

      
      <div className="mt-10 text-center">
        <button
          onClick={handleStartGame}
          className="bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-white font-semibold py-2 px-6 rounded-full shadow-md transition"
        >
          Start Game
        </button>
      </div>
    </div>
  );
};

export default GameInstruction;
