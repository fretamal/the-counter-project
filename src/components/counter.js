import React from 'react'
import classes from './counter.module.css';


const Counter = (props) => {
    return(
        <tr>
            <td><span className={classes.Name}>{props.name}</span></td>
            <td Style="text-align:center">
                <button className={classes.Subs} onClick={ () => props.decrementCount(props.id) }> - </button>
                <span className={classes.Count}>{props.value}</span>
                <button className={classes.Add} onClick={ () => props.incrementCount(props.id) }> + </button>
            </td>
            <td  Style="text-align:right">
                <button className={classes.Delete} onClick={ () => props.deleteCounter(props.id) }>
                    <img className={classes.Trash} src={require('../assets/trash.png')} alt="Borrar"/>    
                </button>
            </td>
        </tr>
    )
}

export default Counter