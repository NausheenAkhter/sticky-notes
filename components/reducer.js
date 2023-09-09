const initialState = {
    notes: []
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_NOTE': return { ...state, notes: [...state.notes, action.value] }
        default:
            console.log('give correct action');
    }
}

export { initialState, reducer }