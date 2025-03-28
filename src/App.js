import React from 'react';
import { RandomWord } from './components/words.js';
import './styles/App.css';

function App() {
  const [word, setWord] = React.useState(RandomWord());
  const [bar, setBar] = React.useState([0, 0, 0, 0, 0]); 
  const [currentLetterArr, setCurrentLetterArr] = React.useState([]);
  let [hint, setHint] = React.useState(0);
  
  const Alpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

  function revealLetter(){
   setCurrentLetterArr(prev => {
    let newarr = [...prev];
    for(let i = 0; i < word.length;i++){
      if(!newarr.includes(word[i]) && hint === 0){
         newarr.push(word[i])
         setHint(prev => prev + 1)
         break;
      }
    }
    return newarr
  })
}

  function handleLetterClick(letter) {
    if (currentLetterArr.includes(letter) || bar.length === 0) return;    
    if (word.includes(letter)) {
      setCurrentLetterArr(prev => [...prev, letter]); 
    } else {
      setBar(prev => prev.slice(0, -1));
    }
  }

  function restartGame() {
    setWord(RandomWord());
    setBar([0, 0, 0, 0, 0])
    setCurrentLetterArr([]);
    setHint(0);
  }


  const hasWon = word.split('').every(letter => currentLetterArr.includes(letter));
  const hasLost = bar.length === 0;

  return (
    <>
      <div className="main">
          <h1 id="title">Guess N Live</h1>
          <p id='desc'>"Guess N Live" is a fun and challenging word-guessing game...</p>
           
          {hasLost && bar.length <= 0 && 
          <>
            <div className='lose'>
             <h1>You Lost!</h1>
             <p>The word was: {word}</p>
            </div>
            <button className='restart-btn' onClick={restartGame}>Restart</button>        
        </>
          }

          {hasWon && 
          <>
            <div className='win'>
              <h1>You Won!</h1>
              <p>Yippie!  the word was: {word}</p>
            </div>
    <button className='restart-btn' onClick={restartGame}>Restart</button>
    </>
    }
            
          {!hasWon && !hasLost && (
            <>
            <div className="content">
              <div id="bar">
                {bar.map((_, index) => (
                  <button key={index} className='bar-span'></button>
                ))}
              </div>

              <div className='current-word'>
                {word.split("").map((letter, i) => (
                  <span key={i} className='current-letter'>
                    {currentLetterArr.includes(letter) ? letter : '_'}
                  </span>
                ))}
              </div>

              <div className='Keyboard'>
                {Alpha.map((letter, i) => (
                  <button 
                    key={i} 
                    className={currentLetterArr.includes(letter) ? 'guessed' : 'keyboard-letter'}
                    onClick={() => handleLetterClick(letter)}
                    disabled={currentLetterArr.includes(letter) || hasLost}
                  >
                    {letter}
                  </button>
                ))}
              </div>
            </div>
          <button onClick={revealLetter} className='Hint' >Hint (only once per game)</button>  
           </>
           )}
      </div>

      <footer id='foot'>
          <p>I Took the design from the scrimba React Course check it out :)</p>
          <a href='https://scrimba.com/learn-react-c0e'>Scrimba: Learn React</a>
      </footer>
    </>
  );
}

export default App;