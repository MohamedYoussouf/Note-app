import React from 'react';
import { useSelector } from 'react-redux';

const NoteViewer = ({addNewNote}) => {
    const activeNote = useSelector(state=> state.activeNote)
    return activeNote?(
        <div className="w-auto sm:w-4/6 md:w-3/4 overflow-auto">
            <div className="w-4/6 mx-auto my-12 text-gray-800 leading-relaxed">
                <div className="mb-5"><span>{activeNote.date}</span></div>
                {activeNote.text}
                <button 
                    className="w-16 h-16 rounded-full shadow-lg flex justify-center items-center bg-blue-500 absolute bottom-5 right-5"
                    onClick={addNewNote}>
                    <svg className="w-5" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 206 206">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M88 88V0h30v88h88v30h-88v88H88v-88H0V88h88z" fill="#fff"/>
                    </svg>
                </button>
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