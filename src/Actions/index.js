
export const Increment = () => {
    return { type: 'increment' }
}

export const Decrement = () => {
    return { type: 'decrement' }
}

export const New =(data) => {
    return { 
        type: 'add',
        payload: data
     }
}

export const Find =(id) => {
    return { 
        type: 'get',
        payload: id
     }
}

export const Form=(data) => {
    return { 
        type: "form",
        payload: data
     }
}

export const Name = (name) => {
    return { 
        type: 'changename',
        payload: name
     }
}

export const Age = (age) => {
    return { 
        type: 'changeage',
        payload: age
     }
}

export const Id = () => {
    return { 
        type: 'id'
     }
}