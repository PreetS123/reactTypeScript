import React from "react";

type HangmanWordProps = {
  guessedLetters: string[]
  wordToGuess: string
  reveal?: boolean
}
const HangmanWords = ({guessedLetters,wordToGuess,reveal=false}:HangmanWordProps) => {

  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "0.25em",
        alignSelf: "center",
        placeSelf: "center",
        fontSize: "4rem",
        textTransform: "uppercase",
        fontFamily: "monospace",
      }}
    >
         {wordToGuess.split("").map((letter, index) => (
        <span style={{ borderBottom: ".1em solid black" }} key={index}>
          <span
            style={{
              visibility:
                guessedLetters.includes(letter) || reveal
                  ? "visible"
                  : "hidden",
              color:
                !guessedLetters.includes(letter) && reveal ? "red" : "black",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};

export default HangmanWords;
