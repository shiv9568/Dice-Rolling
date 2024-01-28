import React from "react";
import Styles from "./Game.module.css"
import Dice from "../../Image/dice.png";
function Game({toggle}) {
  return (
    <div className="  flex  py-14">
      <div className="">
        <img src={Dice} className={`${Styles.an}`} />
      </div>
      <div className="mt-24 ml-10">
        <h1 className="text-7xl font-bold">DICE GAME</h1>
        <div className=" ml-[24vh] mt-5 bg-black text-white pt-[10px] pb-[10px] pl-[18px] pr-[18px] flex justify-center rounded-3xl font-bold hover:bg-white hover:text-black hover:border-2 border-black hover:font-bold cursor-pointer transition-all duration-900">
          <button className="" onClick={toggle}>Play Now</button>
        </div>
      </div>
    </div>
  );
}
export default Game;
