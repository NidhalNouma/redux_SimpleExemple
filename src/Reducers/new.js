
const newReducer = (state = [{id: 1,name: "N", age: '25'}], action) => {
    switch (action.type){
        case 'add':
            return [action.payload, ...state]
        case 'get':
            return state.filter((id) => id == action.payload)
        default:
            return state
    }
}

export default newReducer