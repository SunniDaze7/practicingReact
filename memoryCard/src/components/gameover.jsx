import React from "react";
import gameoverMolang from '../assets/gameoverMolang.png'

function GameOver(props){
    //go back to home and reset score
    function handleClick(){
        props.setGameOver(false)
        props.setScore(0)
        if(props.bestScore < props.score){
            props.setBestScore(props.score -1)
        }
    }
return(
    <>
    <div className="gameOver">
    <h1>Game Over</h1>
    <button onClick={handleClick}>Back to Game</button>
    <img src={gameoverMolang} />
    </div>
    </>
)
}

export default GameOver