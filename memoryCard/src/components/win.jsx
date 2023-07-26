import React,{useState} from "react";

function Win(props){
    //set state for if use won or not
const [win, setWin] = useState(false)
    //go back to home and reset score
    function handleClick(){
        props.setGameOver(false)
        props.setScore(0)
        props.setBestScore(6)
    }
return(
    <>
    <h1>You Win!</h1>
    <button onClick={handleClick}>Play Again?</button>
    </>
)
}

export default Win