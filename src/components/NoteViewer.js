import React from 'react';
import { useSelector } from 'react-redux';

const NoteViewer = () => {
    const activeNote = useSelector(state=> state.activeNote)
    return activeNote?(
        <div className="w-auto sm:w-4/6 md:w-3/4 overflow-auto">
            <div className="w-4/6 mx-auto my-12 text-gray-800 leading-relaxed">
                <div className=""><span>{activeNote.date}</span></div>
                {activeNote.text}
            </div>
        </div>
    ):(
        <div className="w-auto sm:w-4/6 md:w-3/4 bg-gray-100 text-gray-600 flex flex-col items-center justify-center">
            <h3 className="text-2xl font-bold mb-2 text-gray-800">No note selected!</h3>
            <p>Select a note to view it.</p>
        </div>
    );
};

export default NoteViewer;