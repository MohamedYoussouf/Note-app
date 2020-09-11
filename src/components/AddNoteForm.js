import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';

export default function AddNoteForm() {
    const [value, setValue] = useState('');
    const dispatch = useDispatch();

    useEffect(() => {
        const newNote = {
            text: 'New note',
            date: 'xx/xx/xxxxx'
        }
        dispatch({type:'ADD_NEW_NOTE',payload:newNote})
    }, [])

    useEffect(() => {
        if (value !== '') {
            const newNote = {
                text: value,
                date: 'xx/xx/xxxxx'
            }
            dispatch({type:'UPDATE_NOTE',payload:newNote})
        }
    }, [value])

    
    return (
        <div className="w-auto sm:w-4/6 md:w-3/4 overflow-auto">
            <form className="w-4/6 h-full mx-auto py-5 flex flex-col">
                
                <div className="flex flex-row justify-between items-center">
                    <h3 className="text-2xl font-bold">Add new note</h3>
                </div>
                <textarea 
                    className="flex-grow pt-6 outline-none"
                    onChange={(e)=>setValue(e.target.value)} 
                    value={value}
                    placeholder="Write your thoughts!" />
            </form>
        </div>
    );
};