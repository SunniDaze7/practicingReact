import React , {useState, useEffect} from 'react';
import cards from '../assets/cards'

const card = (props) => {
    //set state for if card has been clicked or not
    // const [cardSelected, setCardSelected] = useState(false)
      // state for randomizing cards
    const [randomCard, setRandomCard] = useState([])


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
  //  if(!cardSelected){
  //   setCardSelected(true)
  //   } else if(cardSelected){
  //     props.setGameOver(true)
  //   } 
    props.setScore(props.score+1)
    setRandomCard(shuffle(cards))
  }

  // //push selected cards into an array, if card included in array gameover
  // function handleClick(){
  //   if(!selectedCards.includes(props.card)){
  //    setSelectedCards(selectedCards.push(props.card))
  //    }else if(selectedCards.name == "Orange Molang"){
  //      props.setGameOver(true)
  //    } 
  //    props.setScore(props.score+1)
  //    setRandomCard(shuffle(cards))
  //    console.log(selectedCards)
  //  }
 

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