import React from 'react';

const NoteItem = ({note, index, activeNote, dispatch}) => {
    const classes = (activeNote !== null)&&(activeNote.index===index)? 'px-8 py-5 bg-gray-800 text-white':'px-8 text-gray-500 py-5 hover:bg-gray-800 hover:text-white';

    return (
        <div 
            className={classes}
            onClick={()=> dispatch({
                        type: 'VIEW_ACTIVE_NOTE',
                        payload: note,
                        index: index
            
                    })}>
            <h4 className="text-base">{note.text.substr(0, 90) + '...'}</h4>
        </div>
    );
};

export default NoteItem;