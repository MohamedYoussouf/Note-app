import React from 'react';

const NoteItem = ({note, dispatch}) => {
    return (
        <div 
            className="px-8 text-gray-500 py-5 hover:bg-gray-800 hover:text-white"
            onClick={()=> dispatch({
                        type: 'VIEW_ACTIVE_NOTE',
                        payload: note
            
                    })}>
            <h4 className="text-base">{note.text.substr(0, 90) + '...'}</h4>
        </div>
    );
};

export default NoteItem;