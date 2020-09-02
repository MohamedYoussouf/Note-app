const initialState = null

const activeNoteReducer = (state = initialState, action) => {
    switch (action.type) {

    case 'VIEW_ACTIVE_NOTE':
        return {...state, ...action.payload}

    default:
        return state
    }
}

export default activeNoteReducer;
