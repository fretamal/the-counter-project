import { FETCHCOUNTERS, FETCHCOUNTERSFAIL, INCREMENT, DECREMENT, NEWCOUNTER, DELETECOUNTER, FILTERCOUNTERSBYMAX, ORDERCOUNTERS } from '../actions/'

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
            return {...state, items: action.payload, error: false, filteredItems: action.payload}
        case FETCHCOUNTERSFAIL:
            return {...state, error: true}
        case NEWCOUNTER:
            return {
                ...state,
                items: state.items.concat(action.payload),
                filteredItems: state.filteredItems.concat(action.payload)
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
                items: updtItems3,
                filteredItems: updtItems3
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
                ...state, 
                items: updtItems1,
                filteredItems: updtItems1
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
                ...state, 
                items: updtItems2,
                filteredItems: updtItems2

            }
        case FILTERCOUNTERSBYMAX:
            return{
                ...state, 
                filteredItems: action.payload.items, 
                max: action.payload.max
            }
        case ORDERCOUNTERS:
            let counters = action.payload.items
            let sort = action.payload.sort
            let newSort = null
            if(sort !== ''){
                if(sort === 'asc'){
                    newSort = counters.sort((a,b) => a.value > b.value ? 1 : -1)
                }else if(sort === 'desc'){
                    newSort = counters.sort((a,b) => a.value < b.value ? 1 : -1)
                }else if(sort === 'name'){
                    newSort = counters.sort((a,b) => a.name > b.name ? 1 : -1)
                }else{
                    newSort = counters
                }
                
            }

            return{
                ...state, 
                filteredItems: newSort, 
                sort: action.payload.sort
            }
        default:
            return state
    }
}

export default counterReducer