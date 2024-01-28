import React, { useState } from "react";
import Styles from "./Gameplay.module.css";

function Content({score,setSelectNum}) {
  const arrayNum = [1, 2, 3, 4, 5, 6];
   const [selectNum, SetSelectNum] = useState();
  console.log(selectNum);
  return (
    <div className=" flex justify-between py-8 px-9">
      <div className="">
        <h1 className="text-6xl ml-5 font-bold">{score}</h1>
        <h1 className="text-2xl font-medium">Total Score</h1>
      </div>
      <div className="  flex flex-col">
        <div className=" flex flex-row gap-2 ">
          {arrayNum.map((value, i) => {
            return (
              <div
                key={i}
                onClick={() => {
                 SetSelectNum(value);
                  setSelectNum(value); 
                }}
                className={`${Styles.box}`}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  backgroundColor: selectNum === value ? "black" : "white",
                  color: selectNum == value ? "white" : "black",
                }}
              >
                {value}
              </div>
            );
          })}
        </div>

        <div className=" mt-5 ml-[62vh]">
          <h1 className="text-2xl font-bold">Select Number</h1>
        </div>
      </div>
    </div>
  );
}
export default Content;
