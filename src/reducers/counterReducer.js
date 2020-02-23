import { FETCHCOUNTERS, FETCHCOUNTERSFAIL, INCREMENT, DECREMENT, NEWCOUNTER, DELETECOUNTER } from '../actions/'

const initialState = {
    items: null,
    filteredItems: [],
    max: '',
    min: '',
    sort: '',
    error: false
}

const counterReducer = (state = [initialState] , action) => {
    switch(action.type){
        case FETCHCOUNTERS:
            return {...state, items: action.payload, error: false}
        case FETCHCOUNTERSFAIL:
            return {...state, error: true}
        case NEWCOUNTER:
            const newCounter = {id: action.payload.id , name: action.payload.name , value: action.payload.value} ;
            return {
                state, 
                items: state.items.concat(newCounter), 
                error: false
            }
        case DELETECOUNTER:
            return state.items.filter((name,i,state) => i !== action.payload.index)
        case INCREMENT:
            return state.map((counter,i)=>{
                if(action.payload.index === i){
                    counter.value += 1;
                }
                return counter
            })
        case DECREMENT:
            return state.map((counter,i)=>{
                if(action.payload.index === i){
                    counter.value += -1;
                }
                return counter
            })
        default:
            return state
    }
}

export default counterReducer