import { useState } from 'react'
import './App.css';
import wordList from './json/words.json';

function App() {
  const [gussedwords, setGussedWords] = useState(()=>{
    return wordList[Math.floor(Math.random() * wordList.length)]
  })

  return (
    <>
      
    </>
  )
}

export default App
