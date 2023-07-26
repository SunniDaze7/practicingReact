import React from "react";

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
    <h1>Game Over</h1>
    <button onClick={handleClick}>Back to Game</button>
    </>
)
}

export default GameOver