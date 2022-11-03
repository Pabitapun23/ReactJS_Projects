import { useState } from 'react';
import './index.css';

const App = () => {
  const [diceNumber, setDiceNumber] = useState(6);

  const refreshDice = () => {
    const ran_num = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(ran_num);
}

  return (
    <div>
      <center>
        <img height={300} width={300} src={require(`./assets/${diceNumber}.png`)}></img>
        <br />
        <button onClick={() => refreshDice()} className='button'>Roll</button>
      </center>
    </div>
  );
}

export default App;
