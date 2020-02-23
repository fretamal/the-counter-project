import { FETCHCOUNTERS, FETCHCOUNTERSFAIL, INCREMENT, DECREMENT, NEWCOUNTER, DELETECOUNTER } from '../actions/'

const initialState = {
    items: null,
    filteredItems: [],
    max: '',
    min: '',
    sort: '',
    error: false
}

const counterReducer = (state = initialState , action) => {
    switch(action.type){
        case FETCHCOUNTERS:
            return {...state, items: action.payload, error: false}
        case FETCHCOUNTERSFAIL:
            return {...state, error: true}
        case NEWCOUNTER:
            return {
                ...state,
                items: state.items.concat(action.payload)
            }
        case DELETECOUNTER:
            const updtItems3 = []
            for(let key in state.items){
                console.log('el payload id es: '+action.payload.id)
                if(action.payload.id !== state.items[key].id){
                    console.log('el item id es: '+state.items[key].id)
                    updtItems3.push(state.items[key])
                } 
            }
            return {
                ...state,
                items: updtItems3
            }
        case INCREMENT:
            const updtItems1 = []
            for(let key in state.items){
                if(action.payload.id === state.items[key].id){
                    state.items[key].value += 1;
                    updtItems1.push(state.items[key])
                }else{
                    updtItems1.push(state.items[key])
                } 
            }
            return {
                ...state, items: updtItems1
            }
        case DECREMENT:
            const updtItems2 = []
            for(let key in state.items){
                if(action.payload.id === state.items[key].id){
                    state.items[key].value += -1;
                    updtItems2.push(state.items[key])
                }else{
                    updtItems2.push(state.items[key])
                } 
            }
            return {
                ...state, items: updtItems2
            }
        default:
            return state
    }
}

export default counterReducer