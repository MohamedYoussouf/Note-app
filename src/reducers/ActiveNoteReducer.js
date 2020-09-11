const initialState = null

const activeNoteReducer = (state = initialState, action) => {
    switch (action.type) {

    case 'VIEW_ACTIVE_NOTE':
        console.log(action.index)
        return {...state, ...action.payload, index:action.index}

    default:
        return state
    }
}

export default activeNoteReducer;
