import React, { useState, useEffect } from 'react';

export default function Content(props) {
  const [id, setId] = useState();
  const [advice, setAdvice] = useState('');

  const newAdvice = async () => {
    try {
        const response = await fetch('https://api.adviceslip.com/advice');
        const data = await response.json();
        setAdvice(data.slip.advice);
        setId(data.slip.id);
      } catch (error) {
        console.error('Error fetching advice:', error);
      }
  };

   // Empty dependency array to run the effect only once when the component mounts

  return (
    <>
      <div className="advice-box">
        <h4>ADVICE {id}</h4>
        <p>"{advice}"</p>
        <img src="src\images\pattern-divider-desktop.svg" alt="pattern" />
        <div className="dice">
          <img src="src\images\icon-dice.svg" alt="dice" onClick={newAdvice} />
        </div>
      </div>
    </>
  );
}
