const initialeState = [
    {
        text: 'this is note 1'
    },
    {
        text: 'this is note 2'
    },
    {
        text: 'this is note 3'
    }
]

function notesReducer(state = initialeState, action) {
    switch (action.type) {
        case 'value':
            
            break;
    
        default:
            return state
    }
}

export default notesReducer;