import { useState } from 'react'
import CardList from './components/CardList'
import GameOver from './components/gameover'
//import card objects
import cards from './assets/cards'
//import styles
import './App.css'

function App() {
  //states for scores
  const [score, setScore] = useState(0)
  const [bestScore, setBestScore] = useState(0)
  //to set gameover screen
  const [gameOver, setGameOver] = useState(false)

  return (
    <>
    {!gameOver ? 
    <>
    <div className='nav'>
    <h1>Memory Card Game</h1>
    <div className='scores'>
      <p>Score: {score}</p>
      <p>BestScore: {bestScore}</p>
    </div>
    </div>
        <CardList setScore={setScore} setBestScore={setBestScore} score={score} bestScore={bestScore} setGameOver={setGameOver}/>
        </> :
        <GameOver setGameOver={setGameOver} setScore={setScore} score={score} setBestScore={setBestScore} bestScore={bestScore}/> }
    </>
  )
}

export default App
