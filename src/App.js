import React from 'react';
import {useSelector} from 'react-redux';

function App() {
  const notes = useSelector(state=>state)
  console.log(notes)
  return (
    <div className="App">
      <h1 className="text-red-500">Yo</h1>
    </div>
  );
}

export default App;
