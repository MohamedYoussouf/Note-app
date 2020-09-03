import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

export default function AddNoteForm() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();

        const newNote = {
            text: value,
            date: 'xx/xx/xxxxx'
        }
        dispatch({type:'ADD_NEW_NOTE',payload:newNote})
    }
    return (
        <div className="w-auto sm:w-4/6 md:w-3/4 overflow-auto">
            <form 
                className="px-3 py-5"
                onSubmit={handleSubmit}>
                <div className="flex flex-row justify-between">
                    <h3>Add new note</h3>
                    <button className="px-5 py-2 bg-blue-500 text-white font-bold">Save note</button>
                </div>
                <textarea onChange={e=>setValue(e.target.value)} value={value} />
            </form>
        </div>
    );
};