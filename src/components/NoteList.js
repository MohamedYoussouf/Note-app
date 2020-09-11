import React, {useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';

import NoteItem from './NoteItem'


const NoteList = () => {
    const notes = useSelector(state=> state.notes);
    const activeNote = useSelector(state => state.activeNote)
    const dispatch = useDispatch();


    return (
        <div className="w-auto sm:w-2/6 md:w-1/4 bg-gray-900 text-white">
            <h3>Note list</h3>
            {notes.map((note, index)=>(
                <NoteItem key={index} note={note} index={index} activeNote={activeNote} dispatch={dispatch}/>
            ))}
        </div>
    );
};

export default NoteList;