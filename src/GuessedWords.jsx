import React from 'react';

function GuessedWords(props) {
    if(props.guessedWords && props.guessedWords.length > 0) {
        const guessRows = props.guessedWords.map((g, i) => (
            <tr className="guess-row" key={i} >
                <td>{g.word}</td>
                <td>{g.matches}</td>
            </tr>
        ));
        return (
            <div className="guess-main">
                <table className="guess-table">
                    {guessRows}
                </table>
            </div>
        )
    } else {
        return (
            <div className="guess-main">
                <div className="guess-msg">
                    Guess some guessedWord
                </div>
            </div>
        )
    }
    
}

export default GuessedWords;