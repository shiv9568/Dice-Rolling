import React, { useState } from "react";
import Game from "./Components/Game/Game"
import Gameplay from "./Components/Gameplay.jsx/Gameplay";
function App()
{
  {
    
  }
  const [isGameStarted, SetisGameStarted] = useState(false);
  const toggleGamePlay = () => {
    SetisGameStarted((prev) => !prev);
  };
  return (
    <>{isGameStarted?<Gameplay/>:<Game toggle={toggleGamePlay}/>}</>
  );
}
export default App;