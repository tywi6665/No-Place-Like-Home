import React from 'react';
import './App.scss';
import Container from "./Components/Container";
import Capitol from "./Components/Capitol";

function App() {
  return (
    <Container>
      <div className="city">
        <Capitol />
      </div>
    </Container>
  );
}

export default App;
