import React from "react";

const HangmanWords = () => {
    let word="Test";
    let guessedLetters=['T'];
    let reveal = false;
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
        {word.split("").map((el,i)=>{
            return (
                <span style={{ borderBottom: ".1em solid black" }} key={i}>
                    <span
                     style={{
                        visibility:
                          guessedLetters.includes(el) || reveal
                            ? "visible"
                            : "hidden",
                        color:
                          !guessedLetters.includes(el) && reveal ? "red" : "black",
                      }}
                    >{el}</span>
                </span>
            )
        })}
    </div>
  );
};

export default HangmanWords;
