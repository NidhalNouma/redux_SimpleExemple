

const formReducer = (state={id:2, name: '', age: '' }, action) => { 
    if (action.type == 'changename'){
        state.name = action.payload
        return state
    }
    else if (action.type == 'changeage'){
        state.age = action.payload
        return state
    }
    else if (action.type == 'id'){
        state.id = state.id+1
        return state
    }
    else if(action.type == 'form'){
        return action.payload
    }
    else {
        return state
    }
}

export default formReducer