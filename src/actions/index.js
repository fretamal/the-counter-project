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
            console.log(fetchedCounters)
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

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }

export const newCounter = (name) => {
    const counter = {id: makeid(7), name:name, value: 0}
    axios.post('api/v1/counters.json', counter)
        .then((response) => {
            console.log(response)
            return{
                type : NEWCOUNTER,
                payload: { counter }
            }
        })
        .catch( (error) => {
            console.log(error)
            return{
                type : NEWCOUNTER,
                payload: { error }
            }
        })

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

// export const filterByMax = (index) => {
//     return{
//         type : FILTERCOUNTERSBYMAX,
//         value: value,
//         payload: { items:size === '' ? counters : counters.filter( a => a.value <= value) }
//     }
// }