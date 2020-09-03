import React, {useState} from 'react';

import NoteList from './components/NoteList'
import NoteViewer from './components/NoteViewer'
import AddNoteForm from './components/AddNoteForm'

function App() {
  const [isAddNoteFormVisible, setIsAddNoteFormVisible] = useState(false);
  const mainView = isAddNoteFormVisible?<AddNoteForm />:<NoteViewer addNewNote={()=>setIsAddNoteFormVisible(true)}/>;
  return (
    <div className="flex h-full bg-white">
      <NoteList />
      {mainView}
    </div>
  );
}

export default App;
