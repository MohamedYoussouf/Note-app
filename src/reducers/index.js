import {combineReducers} from 'redux';
import notesReducer from './NotesReducer'
import activeNoteReducer from './ActiveNoteReducer'

const rootReducer = combineReducers({
    notes: notesReducer,
    activeNote: activeNoteReducer
});

export default rootReducer;