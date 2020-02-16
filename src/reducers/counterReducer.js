import { INCREMENT, DECREMENT, NEWCOUNTER, DELETECOUNTER } from '../actions/'

const counterReducer = (state = [{name: 'contador 1',value:10},{name: 'contador 2',value:4}] , action) => {
    switch(action.type){
        case NEWCOUNTER:
            return [...state, { name: action.payload.name, value: 0 }]
        case DELETECOUNTER:
            return state.filter((name,i,state) => i !== action.payload.index)
        case INCREMENT:
            return state.map((counter,i)=>{
                if(action.payload.index === i){
                    counter.value += 1;
                }
                return counter
            })
            break
        case DECREMENT:
            return state.map((counter,i)=>{
                if(action.payload.index === i){
                    counter.value += -1;
                }
                return counter
            })
            break
        
        default:
            return state
    }
}

export default counterReducer