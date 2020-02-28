import React from 'react'
import classes from './counter.module.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

const Counter = (props) => {

    const submit = () => {
        
        confirmAlert({
          customUI: ({ onClose }) => {
            return (
                <div className='custom-ui'>
                    <div className={classes.Modal}>
                        <h1 className={classes.ModalTitle}>¿Seguro?</h1>
                        <p className={classes.ModalMsg}>El contador será eliminado.</p>
                        <button className={classes.ModalNo} onClick={onClose}>No</button>
                        <button className={classes.ModalYes} onClick={() => {
                            props.deleteCounter(props.id)
                            onClose()
                            }}
                        >
                        Si
                        </button>
                    </div>
                </div>
                );
            } 
        });
      };


    return(
        <tr>
            <td><span className={classes.Name}>{props.name}</span></td>
            <td className={classes.TableRowCenter}>
                <button className={classes.Subs} onClick={ () => props.decrementCount(props.id) }> - </button>
                <span className={classes.Count}>{props.value}</span>
                <button className={classes.Add} onClick={ () => props.incrementCount(props.id) }> + </button>
            </td>
            <td className={classes.TableRowRight}>
                {/* <button className={classes.Delete} onClick={ () => props.deleteCounter(props.id) }> */}
                <button className={classes.Delete} onClick={ submit }>
                    <img className={classes.Trash} src={require('../assets/trash.png')} alt="Borrar"/>    
                </button>
            </td>
        </tr>
    )
}

export default Counter