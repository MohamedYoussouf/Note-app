import React from 'react';
import { useSelector } from 'react-redux';

const NoteViewer = () => {
    const activeNote = useSelector(state=> state.activeNote)
    return (
        <div className="w-auto sm:w-4/6 md:w-3/4 overflow-auto">
            <div className="w-4/6 mx-auto text-gray-800 leading-relaxed">{activeNote?activeNote.text:'Not note selected'}</div>
        </div>
    );
};

export default NoteViewer;