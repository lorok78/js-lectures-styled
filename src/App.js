import React, { useState } from "react";

import { getRandomColor } from './helpers/getRandomColor';

import { Button, Title } from './styles';
import './App.css';

const App = () => {
  const [titleColor, setTitleColor] = useState('#fff');
  const [buttonBackground, setButtonBackground] = useState('#36394e')

  const onClick = () => {
    setTitleColor('#' + getRandomColor());
    setButtonBackground('#' + getRandomColor());
  }

  return (
    <div className="App">
      <header className="App-header">
          <Title color={titleColor}>JS Styled Component</Title>
        <Button background={buttonBackground} onClick={() => onClick()}>Please Click Me</Button>
      </header>
    </div>
  );
}

export default App;
