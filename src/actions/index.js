import axios from '../axios'

// Action types
export const FETCHCOUNTERS = 'FETCHCOUNTERS'
export const FETCHCOUNTERSFAIL = 'FETCHCOUNTERSFAIL'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const NEWCOUNTER = 'NEWCOUNTER'
export const DELETECOUNTER = 'DELETECOUNTER'
export const FILTERCOUNTERSBYMAX = 'FILTERCOUNTERSBYMAX'

// Action creators

export const fetchCounters = () => {
    return(dispatch) =>{
        axios.get('https://the-counter-project.firebaseio.com/api/v1/counters.json')
        .then( response => {
            const fetchedCounters = []
            for(let key in response.data){
                fetchedCounters.push({...response.data[key]})
            }
            dispatch({
                type : FETCHCOUNTERS,
                payload: fetchedCounters
            })
        })
        .catch( error => {
            console.log(error)
            dispatch({
                type : FETCHCOUNTERSFAIL,
            })
        })
    }
}

export const newCounter = (id, name, value) => {
    return(dispatch) =>{
    const counter = {id: id, name: name, value: value}
    axios.post('api/v1/counters.json', counter)
        .then((response) => {
            // console.log(response)
            dispatch({
                type : NEWCOUNTER,
                payload: counter 
            })
        })
        .catch( (error) => {
            console.log(error)
            dispatch({
                type : NEWCOUNTER,
                payload: { error }
            })
        })
    }
}

export const incrementCount = (id) => {
    return{
        type : INCREMENT,
        payload: { id }
    }
}

export const decrementCount = (id) => {
    return{
        type : DECREMENT,
        payload: { id }
    }
}



export const deleteCounter = (index) => {
    return{
        type : DELETECOUNTER,
        payload: { index }
    }
}

// export const filterByMax = (index) => {
//     return{
//         type : FILTERCOUNTERSBYMAX,
//         value: value,
//         payload: { items:size === '' ? counters : counters.filter( a => a.value <= value) }
//     }
// }