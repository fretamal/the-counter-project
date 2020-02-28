import React from 'react'
import classes from './counter.module.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import Spinner from './spinner'

const Counter = (props) => {

    function submit(){
        
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
                {(props.loading && props.loadingid === props.id ) ? <div className={classes.SpinnerWrap}><Spinner/></div> : <div className={classes.Count}>{props.value}</div> }
                <button className={classes.Add} onClick={ () => props.incrementCount(props.id) }> + </button>
            </td>
            <td className={classes.TableRowRight}>
                {/* <button className={classes.Delete} onClick={ () => props.deleteCounter(props.id) }> */}
                <button data-testid="Borrar" className={classes.Delete} onClick={ () => submit() }>
                    <img className={classes.Trash} src={require('../assets/trash.png')} alt="Borrar"/>    
                </button>
            </td>
        </tr>
    )
}

export default Counter