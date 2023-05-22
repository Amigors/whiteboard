import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };
  const [text, setText] = useState(`Div ${count}`);

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleDivClick = (event) => {
    event.target.contentEditable = true;
  };

  const showDivs = () => {
    const divs = [];
    for (let i = 0; i < count; i++) {
      divs.push(<div 
                  key={i} 
                  draggable={true} 
                  onClick={handleDivClick} 
                  onInput={handleTextChange} 
                  style={{width:'50px', height:'50px', border:'1px solid black'}}
                  >
                    {text}
                  </div>);
    }
    return divs;
  };

  return (
    <div>
      <button onClick={handleClick}>Add Div</button>
      {showDivs()}
    </div>
  );
}

export default App;
