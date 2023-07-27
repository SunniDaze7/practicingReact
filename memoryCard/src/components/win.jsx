import React,{useState} from "react";
import partyMolang from '../assets/partyMolang.jpg'

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
    <div className="win">
    <h1>You Win!</h1>
    <button onClick={handleClick}>Play Again?</button>
    <img src={partyMolang}/>
    </div>
    </>
)
}

export default Win