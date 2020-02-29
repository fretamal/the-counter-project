import axios from '../axios'

// Action types
export const FETCHCOUNTERS = 'FETCHCOUNTERS'
export const FETCHAPIFAIL = 'FETCHAPIFAIL'
export const RESETFETCHAPIFAIL = 'RESETFETCHAPIFAIL'
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const LOADINGCOUNT = 'LOADINGCOUNT'
export const NEWCOUNTER = 'NEWCOUNTER'
export const DELETECOUNTER = 'DELETECOUNTER'
export const FILTERBYRANGE = 'FILTERBYRANGE'
export const ORDERCOUNTERS = 'ORDERCOUNTERS'
export const SEARCHCOUNTERS = 'SEARCHCOUNTERS'


// Action creators

// Función que obtine los contados existentes en la base de datos
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
                type : FETCHAPIFAIL,
                payload: {status: true, msg: 'No pudimos obtener los contadores.'}
            })
        })
    }
}

// Función que agrega un nuevo contador con valor 0, id aleatoria y el nombre dado
export const newCounter = (id, name, value) => {
    return(dispatch) =>{
        dispatch({
            type : LOADINGCOUNT,
            payload: {status: true, id: ''} 
        })
        const counter = {id: id, name: name.toLowerCase(), value: value}
        axios.post('api/v1/counters.json', counter)
        .then((response) => {
            dispatch({
                type : NEWCOUNTER,
                payload: counter 
            })
            dispatch({
                type : LOADINGCOUNT,
                payload: {status: false, id: ''} 
            })
        })
        .catch( (error) => {
            console.log(error)
            dispatch({
                type : FETCHAPIFAIL,
                payload: {status: true, msg: 'No pudimos agregar el nuevo contador.'}
            })
            dispatch({
                type : LOADINGCOUNT,
                payload: {status: false, id: ''} 
            })
        })
    }
}

// Función que aumenta el valor de un contador en 1
export const incrementCount = (id) => {

    return(dispatch) =>{
        dispatch({
            type : LOADINGCOUNT,
            payload: {status: true, id: id} 
        })
        // Firebase tiene un UID unico por elemento, primero se debe obtener ese uid para luego eliminar
        // el elemento de la lista
        let uid = null;
        let counter = null;
        axios.get('api/v1/counters.json?orderBy="id"&equalTo="'+id+'"')
            .then((response) =>{
                for(var i in response.data){
                    uid = i;
                    counter = response.data[i]
                }
                let newCounter = {...counter, value: counter.value+1}
                axios.put('api/v1/counters/'+uid+'.json',newCounter)
                    .then((response) => {
                        dispatch({
                            type : INCREMENT,
                            payload: { id } 
                        })
                        dispatch({
                            type : LOADINGCOUNT,
                            payload: {status: false, id: ''} 
                        })
                    })
                    .catch( (error) => {
                        console.log(error)
                        dispatch({
                            type : FETCHAPIFAIL,
                            payload: {status: true, msg: 'No pudimos aumentar el contador.'}
                        })
                        dispatch({
                            type : LOADINGCOUNT,
                            payload: {status: false, id: ''} 
                        })
                    })
                
            }).catch((e) => {
                console.log(e.message)
                dispatch({
                    type : FETCHAPIFAIL,
                    payload: {status: true, msg: 'No pudimos aumentar el contador.'}
                })
                dispatch({
                    type : LOADINGCOUNT,
                    payload: {status: false, id: ''} 
                })

            })
    }
}

// Función que disminuye el valoder de un contador en 1
export const decrementCount = (id) => {
    return(dispatch) =>{
        dispatch({
            type : LOADINGCOUNT,
            payload: {status: true, id: id} 
        })
        // Firebase tiene un UID unico por elemento, primero se debe obtener ese uid para luego eliminar
        // el elemento de la lista
        let uid = null;
        let counter = null;
        axios.get('api/v1/counters.json?orderBy="id"&equalTo="'+id+'"')
            .then((response) =>{
                for(var i in response.data){
                    uid = i;
                    counter = response.data[i]
                }
                let newCounter = {...counter, value: counter.value-1}
                axios.put('api/v1/counters/'+uid+'.json',newCounter)
                    .then((response) => {
                        dispatch({
                            type : DECREMENT,
                            payload: { id } 
                        })
                        dispatch({
                            type : LOADINGCOUNT,
                            payload: {status: false, id: ''} 
                        })
                    })
                    .catch( (error) => {
                        console.log(error)
                        dispatch({
                            type : FETCHAPIFAIL,
                            payload: {status: true, msg: 'No pudimos disminuir el contador.'}
                        })
                        dispatch({
                            type : LOADINGCOUNT,
                            payload: {status: false, id: ''} 
                        })
                    })
                
            }).catch((e) => {
                console.log(e.message)
                dispatch({
                    type : FETCHAPIFAIL,
                    payload: {status: true, msg: 'No pudimos disminuir el contador.'}
                })
                dispatch({
                    type : LOADINGCOUNT,
                    payload: {status: false, id: ''} 
                })
            })
    }
}

// Función que borra un contador
export const deleteCounter = (id) => {
    return(dispatch) =>{
        // Firebase tiene un UID unico por elemento, primero se debe obtener ese uid para luego eliminar
        // el elemento de la lista
        let uid = null;
        axios.get('api/v1/counters.json?orderBy="id"&equalTo="'+id+'"')
            .then((response) =>{
                for(var i in response.data){
                    uid = i;
                }
                axios.delete('api/v1/counters/'+uid+'.json',)
                    .then((response) => {
                        dispatch({
                            type : DELETECOUNTER,
                            payload: { id } 
                        })
                    })
                    .catch( (error) => {
                        console.log(error)
                        dispatch({
                            type : FETCHAPIFAIL,
                            payload: {status: true, msg: 'No pudimos eliminar el contador.'}
                        })
                    })
                
            }).catch((e) => {
                dispatch({
                    type : FETCHAPIFAIL,
                    payload: {status: true, msg: 'No pudimos eliminar el contador.'}
                })
                console.log(e.message)
            })
    }
}
// Función que filtra los contadores con respecto a un numero mayor a o menor a
export const filterByRange = (counters, max,min) => {
    return(dispatch) =>{
        let filtered = null;
        if(min === '' && max !== ''){
            filtered = counters.filter( a => a.value > max)
        }else if(min !== '' && max === ''){
            filtered = counters.filter( a => a.value < min)
        }else if(min !== '' && max !== ''){
            let firsfilter = counters.filter( a => a.value > max)
            filtered =firsfilter.filter( a => a.value < min)
        }else{
            filtered = counters
        }
        dispatch({
            type : FILTERBYRANGE,
            payload: { 
                max: max,
                min: min,
                items:filtered
            }
        })
    }
}

// Función que ordena los contadores por: nombre, valor ascendente, valor descendente
export const sortCounters = (counters, sort) => {
    return(dispatch) =>{
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
        }else{
            newSort = counters
        }
        dispatch({
            type : ORDERCOUNTERS,
            payload: { 
                sort: sort,
                items: newSort 
            }
        })
    }
}

// Función que busca en los nombres de los contadores el texto entregado
export const searchCounters = (counters, search) => {
    return(dispatch) =>{
        let filtered = null
        if(search !== ''){
            filtered = counters.filter(a => a.name.includes(search.toLowerCase()))
        }else{
            filtered = counters
        }
        dispatch({
            type : SEARCHCOUNTERS,
            payload: { 
                search: search,
                items: filtered
            }
        })
    }
}

// Función que resetea el estado de error 
export const resetFetchApiFail = () => {
    return(dispatch) =>{
        dispatch({
            type : RESETFETCHAPIFAIL,
            payload: {status: false, msg: ''}
        })
    }
}
