import React from 'react';

import NoteList from './components/NoteList'
import NoteViewer from './components/NoteViewer'

function App() {
  return (
    <div className="flex h-full bg-white">
      <NoteList />
      <NoteViewer />
    </div>
  );
}

export default App;
