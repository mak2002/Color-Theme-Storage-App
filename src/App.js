import React, { useState } from 'react'
import './App.css';
import AddColor from './components/AddColor'
import ShowColor from './components/ShowColors'

function App() {

  const [colors, setcolors] = useState([])

  const addColor = (color) => {
    setcolors([...colors,color])
  }

  return (
    <div className="App">
      <AddColor addColor={addColor}/>
      <ShowColor colors={colors}/>
    </div>
  );
}

export default App;
