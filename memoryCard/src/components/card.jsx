import React , {useState, useEffect} from 'react';
import cards from '../assets/cards'

const card = (props) => {
      // state for randomizing cards
    const [randomCard, setRandomCard] = useState([])
    //set state for if card has been clicked or not
    const [selectedCards, setSelectedCards] = useState([])


    //to shuffle cards
    function shuffle(cards) {
        let currentIndex = cards.length,  randomIndex;
    
        // While there remain elements to shuffle.
        while (currentIndex != 0) {
    
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
    
        // And swap it with the current element.
        [cards[currentIndex], cards[randomIndex]] = [
            cards[randomIndex], cards[currentIndex]];
        }
    
        return cards;
    }


  // when card clicked, score increasees by one
  // if card has already been clicked get gameover
  function handleClick(){

  if(!selectedCards.includes(props.card.id)){
    setSelectedCards([...selectedCards, props.card.id])
    } else if(selectedCards.includes(props.card.id)){
      props.setGameOver(true)
    }
    console.log(selectedCards)

    props.setScore(props.score+1)
    setRandomCard(shuffle(cards))
  }


  return (
    <>
        <div className='card' onClick={handleClick}>
        <img src={props.card.image}></img>
        <p>{props.card.name}</p>
        <p>{props.card.id}</p>
        </div>
    </>
  )
};



export default card;