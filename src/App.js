import './App.css';
import GameNotes from './Components/game-notes.js';
import playGame from './Components/play-game';
import { useState } from 'react';

function App() {
  const [notesState, setNotesState] = useState(false);

  const toggleNotes = () => {
    setNotesState(!notesState);
  }

  return (
    <div className="App">
        <button id="playBtn" className="pushable" onClick={playGame}>
          <span className="shadow"></span>
          <span className="blue-edge"></span>
          <span className="blue-front">
            play
          </span>
        </button>
        <button id="notesBtn" className="pushable" onClick={toggleNotes}>
          <span className="shadow"></span>
          <span className="green-edge"></span>
          <span className="green-front">
            Info
          </span>
        </button>
        <canvas id="gamePlayCanvas"></canvas>
        <img id="playerImage" src="Sprites/shipSpriteImg.png"/>
        <img id="enemyImage" src="Sprites/enemyFlat.png"/>
        <img id="charge1Image" src="Sprites/charge1x2.png"/>
        <img id="charge2Image" src="Sprites/charge2x2.png"/>
        <img id="charge3Image" src="Sprites/charge3x2.png"/>
        <img id="charge4Image" src="Sprites/charge4x2.png"/>
        <img id="charge5Image" src="Sprites/charge5x2.png"/>
        <img id="charge6Image" src="Sprites/charge6x2.png"/>
        <img id="shieldImage" src="Sprites/shieldSprite.png"/>
        <img id="forceImage" src="Sprites/forceSprite.png"/>
        <img id="wallStart" src="Sprites/wallfrontX2.png"/>
        <img id="wallMiddle" src="Sprites/wallMiddlex2.png"/>
        <img id="wallEnd" src="Sprites/wallEndx2.png"/>
        <img id="topWallStart" src="Sprites/topWallFrontx2.png"/>
        <img id="topWallMiddle" src="Sprites/topWallMiddlex2.png"/>
        <img id="topWallEnd" src="Sprites/topWallEndx2.png"/>
        <img id="enemyFire" src="Sprites/enemyFireSprite.png"/>
        <img id="itemRobot" src="Sprites/itemRobot.png"/>
        <img id="largeEnemy" src="Sprites/largeEnemySprite.png"/>
        <img id="enemyExplosion" src="Sprites/enemyExplosionx2.png"/>
        <img id="chargeSparks" src="Sprites/sparksx2.png"/>
        <img id="playerExplosion" src="Sprites/playerExplosion.png"/>
        {notesState ? <GameNotes toggleNotes={toggleNotes}/> : null}
    </div>
  );
}

export default App;
