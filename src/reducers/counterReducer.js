import { LOADINGCOUNT, FETCHCOUNTERS, FETCHAPIFAIL, RESETFETCHAPIFAIL, INCREMENT, DECREMENT, NEWCOUNTER, DELETECOUNTER, FILTERBYRANGE, ORDERCOUNTERS,SEARCHCOUNTERS } from '../actions/'

const initialState = {
    items: null,
    filteredItems: [],
    max: '',
    min: '',
    sort: '',
    search: '',
    error: false,
    errormsg: '',
    loading: false,
    loadingid: '',
}

const counterReducer = (state = initialState , action) => {
    switch(action.type){
        case FETCHCOUNTERS:
            return {...state, items: action.payload, error: false, filteredItems: action.payload}
        case FETCHAPIFAIL:
            return {...state, error: action.payload.status, errormsg: action.payload.msg}
        case RESETFETCHAPIFAIL:
            return {...state, error: action.payload.status, errormsg: action.payload.msg}
        case NEWCOUNTER:
            return {
                ...state,
                items: state.items.concat(action.payload),
                filteredItems: state.filteredItems.concat(action.payload)
            }
        case DELETECOUNTER:
            const updtItems3 = []
            for(let key in state.items){
                if(action.payload.id !== state.items[key].id){
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
        case FILTERBYRANGE:
            return{
                ...state, 
                filteredItems: action.payload.items, 
                max: action.payload.max,
                min: action.payload.min
            }
        case ORDERCOUNTERS:
            return{
                ...state, 
                filteredItems: action.payload.items, 
                sort: action.payload.sort
            }
        case SEARCHCOUNTERS:
            return{
                ...state, 
                filteredItems: action.payload.items, 
                search: action.payload.search
            }
        case LOADINGCOUNT:
            return{
                ...state, 
                loading: action.payload.status,
                loadingid: action.payload.id
            }
        default:
            return state
    }
}

export default counterReducer