import React, { useState } from 'react';

const GuessForm = ({onGuess}) => {
    const [guess, setGuess] = useState([0, 0, 0, 0]);

    const handleSelectChange = (event, index) => {
        const newGuess = [...guess];
        newGuess[index] = parseInt(event.target.value);
        setGuess(newGuess);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onGuess(guess.join(''));
        setGuess([0, 0, 0, 0]);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="guessInput">Guess:</label>
                <div className="d-flex">
                    {guess.map((digit, index) => (
                        <select
                            key={index}
                            className="form-control mx-2"
                            value={digit}
                            onChange={(event) => handleSelectChange(event, index)}
                        >
                            {[...Array(10).keys()].map((num) => (
                                <option key={num} value={num}>
                                    {num}
                                </option>
                            ))}
                        </select>
                    ))}
                </div>
            </div>
            <button type="submit" className="btn btn-primary">
                Guess
            </button>
        </form>
    );
};

export default GuessForm;