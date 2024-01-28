import React, { useState } from "react";
import Styles from "./RollDice.module.css";

function RollDice({ setScore, selectNum, toggleRules }) {
  const [currentDice, SetcurrentDice] = useState(1);

  const [rolling, setRolling] = useState(false);
  const genrateRandomNumber = (min, max) => {
    console.log(Math.floor(Math.random() * (max - min) + min));
    return Math.floor(Math.random() * (max - min) + min);
  };
  const roleDice = () => {
    setRolling(true);
    const random = genrateRandomNumber(1, 7);
    SetcurrentDice((prev) => random);
    setTimeout(() => {
      setRolling(false);
    }, 600);
    if (selectNum === currentDice) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setScore((prevScore) => prevScore - 1);
    }
  };
  return (
    <div className=" ">
      <div className=" flex justify-center">
        <img
          src={`/dice_${currentDice}.png`}
          className={`w-[250px] h-[250px] cursor-pointer ${
            rolling ? Styles.roll : ""
          }`}
          onClick={roleDice}
        />
      </div>
      <p className="ml-[79vh] text-2xl text-bold">click to Roll Dice</p>
      <div className=" mt-4 ml-">
        <div className=" flex flex-col mr-4 mt-1">
          <button
            className="bg-white text-black text-xl rounded w-[33vh] py-2 flex justify-center ml-[42vw] border-4 border-black"
            onClick={() => setScore(0)}
          >
            Reset Score
          </button>
          <button
            className="bg-black w-[33vh] py-2 flex justify-center ml-[42vw] mt-3 border-4 border-black text-white mb-7"
            onClick={toggleRules}
          >
            Show Rules
          </button>
        </div>
      </div>
    </div>
  );
}
export default RollDice;
