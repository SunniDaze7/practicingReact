import React , {useState} from 'react';
import cards from '../assets/cards'

const card = (props) => {
  //set state for if card has been clicked or not
  const [cardSelected, setCardSelected] = useState(false)

  //when card clicked, score increasees by one
  //if card has already been clicked get gameover
  function handleClick(){
   if(!cardSelected){
    setCardSelected(true)
    } else if(cardSelected){
      props.setGameOver(true)
    } 
    props.setScore(props.score+1)
  }
  return (
    <>
        <div className='card' onClick={handleClick}>
        <img src={props.card.image}></img>
        <p>{props.card.name}</p>
        </div>
    </>
  )
};



export default card;