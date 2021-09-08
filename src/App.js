import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [weight,setWeight] = useState(0)
  const [height,setHeight] = useState(0)
  const [bmi,setBmi] = useState(0)

  function handleSubmit(e) {
    e.preventDefault();
    setBmi(weight / (height * height));
  }
  return (
    <div id="container">
      <h3>Calculating body mass index</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Height</label>
          <input type="number" onChange={e => setHeight(e.target.value)} value={height} />
        </div>
        <div>
          <label>Weight</label>
          <input type="number" onChange={e => setWeight(e.target.value)} value={weight} />
        </div>
        <div>
          <label>BMI</label>
          <output>{bmi.toFixed(1)}</output>
        </div>
        <button>Calculate</button>
      </form>
    </div>
  )
}

export default App;
