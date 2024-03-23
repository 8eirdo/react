import React, { useState } from 'react';

function Syracuse() {
  const [nombre, setNombre] = useState(0);
  const [resultat, setResultat] = useState([]);
  const [nbIterations, setNbIterations] = useState(0);

  const handleInputChange = (event) => {
    setNombre(parseInt(event.target.value));
  };

  const handleClick = () => {
    if (nombre <= 0) {
      setResultat(['Saisissez un entier positif']);
      setNbIterations(0);
      return;
    }

    let newResult = [`On obtient le terme ${nombre}`];
    let iterations = 0;
    let currentNumber = nombre;

    while (currentNumber !== 1) {
      iterations++;
      if (currentNumber % 2 === 0) {
        currentNumber /= 2;
        newResult.push(`On obtient le terme ${currentNumber}`);
      } else {
        currentNumber = 3 * currentNumber + 1;
        newResult.push(`On obtient le terme ${currentNumber}`);
      }
    }

    setResultat(newResult);
    setNbIterations(iterations);
  };

  return (
    <div>
      <h1>Algorithme de Syracuse</h1>
      <p>Saisissez un entier positif : </p>
      <input type="number" id="nombre" min="1" value={nombre} onChange={handleInputChange} />
      <button id="valider" onClick={handleClick}>
        Valider
      </button>
      <div>
        {resultat.map((item) => (
          <p key={item}>{item}</p>
        ))}
        {nbIterations > 0 && (
          <p>On doit appliquer {nbIterations} fois la transformation avant d'arriver à 1</p>
        )}
      </div>
    </div>
  );
}

export default Syracuse;