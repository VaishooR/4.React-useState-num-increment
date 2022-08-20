import * as React from 'react';
import './style.css';
import { useState } from 'react';

export default function App() {
  var [num, setnum] = useState(0);

  let Increment = () => {
    setnum(num + 10);
  };
  let Decrement = () => {
    setnum(num - 10);
  };
  let Reset = () => {
    setnum(0);
  };

  return (
    <div>
      {num}
      <br />
      <button onClick={Increment}>Increase</button>&nbsp;
      <button onClick={Decrement}>Decrement</button>&nbsp;
      <button onClick={Reset}>Reset</button>
    </div>
  );
}
