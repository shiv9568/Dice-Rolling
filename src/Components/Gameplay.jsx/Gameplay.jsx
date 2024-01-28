import React, { useState } from "react";

import Content from "./Content";
import RollDice from "./RollDice";
import RulesComponent from "./rules"; 

function Gameplay() {
  const [showRules, setShowRules] = useState(false); 
  const toggleRules = () => {
    setShowRules((prev) => !prev);
  };
  const [score, setScore] = useState(0);
  const [selectNum, setSelectNum] = useState();

  return (
    <div>
      <Content score={score} setSelectNum={setSelectNum} />
      <RollDice setScore={setScore} selectNum={selectNum} toggleRules={toggleRules} />
      {showRules && <RulesComponent />} 
    </div>
  );
}

export default Gameplay;