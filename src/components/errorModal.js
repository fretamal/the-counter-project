import React, { Component } from 'react'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
import classes from './errorModal.module.css';

const ErrorModal = (props) => {

    return(
        <div>
            {confirmAlert({
                customUI: ({ onClose }) => {
                return (
                    <div className='custom-ui'>
                        <div className={classes.Modal}>
                            <h1 className={classes.ModalTitle}>Ups!</h1>
                            <p className={classes.ModalMsg}>{props.errorMsg}</p>
                            <button 
                            className={classes.ModalNo} 
                            onClick={()=> {
                                props.resetFetchApiFail()
                                onClose()
                            }}
                            >ok!</button>
                        </div>
                    </div>
                    );
                } 
            })
        }
        </div>
    )
}


export default ErrorModal