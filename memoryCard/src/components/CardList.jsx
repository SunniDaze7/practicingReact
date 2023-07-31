import React, {useState, useEffect} from "react";
import cards from '../assets/cards'
import Card from './card'
import Win from "./win";

function CardList(props){
    //show and hide rules state
    const [rules, setRules] = useState(false)
    const [selectedCards, setSelectedCards] = useState([])
      //set state for if card has been clicked or not
  const [cardSelected, setCardSelected] = useState(false)

    //when rule button is clicked, show and hide rules
    function handleClick(){
        setRules(true)
    }

    return(
        <>
        {props.score == 6 ? <Win setGameOver={props.setGameOver} setScore={props.setScore} setBestScore={props.setBestScore}/>: <>
        {rules ? <> 
        <p>Rules: Try to select every card without clicking on the same card twice!</p>
        <button onClick={()=> (setRules(false))}>Hide Rules</button>
        </>
        : <button onClick={handleClick}>Show Rules</button>}
        {/* map through cards array and render each card */}
        <div className='cards'>
        {cards.map((card)=> 
        (<Card card={card} key={card.id} setScore={props.setScore} setBestScore={props.setBestScore} score={props.score} bestScore={props.bestScore} setGameOver={props.setGameOver}/>
        ))}
        </div>
        </>
}
</>
    )
}

export default CardList