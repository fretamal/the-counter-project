// Action types
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const NEWCOUNTER = 'NEWCOUNTER'
export const DELETECOUNTER = 'DELETECOUNTER'


// Action creators

export const incrementCount = (index) => {
    return{
        type : INCREMENT,
        payload: { index }
    }
}

export const decrementCount = (index) => {
    return{
        type : DECREMENT,
        payload: { index }
    }
}

export const newCounter = (name) => {
    return{
        type : NEWCOUNTER,
        payload: { name }
    }
}

export const deleteCounter = (index) => {
    return{
        type : DELETECOUNTER,
        payload: { index }
    }
}