import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newCounter } from '../actions/'
import classes from './addCounter.module.css'
import { confirmAlert } from 'react-confirm-alert'
import 'react-confirm-alert/src/react-confirm-alert.css'
export class AddCounter extends Component {

    constructor(props){
        super(props)

        this.state = {
            name: '',
        }
    }

    alert(){
        confirmAlert({
          customUI: ({ onClose }) => {
            return (
                <div className='custom-ui'>
                    <div className={classes.Modal}>
                        <p className={classes.ModalMsg}>El nombre no puede estar vacio</p>
                        <button className={classes.ModalYes} onClick={onClose}>ok!</button>
                    </div>
                </div>
                );
            } 
        });
      };

    makeid(length) {
        var result           = '';
        var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
           result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
     }

    sendInfo(){
        this.props.newCounter(this.makeid(7),this.state.name,0)
        this.setState({name : ''})
    }

    render() {
        return (
            <div className={classes.AddWrapper}>
                <h3 className={classes.Title}>Nuevo</h3>
                <div className={classes.FormWrapper}>
                    <input
                        className={classes.InputText}
                        type='text' 
                        placeholder='Ingresa un nombre' 
                        value={this.state.name} 
                        onChange={(e) => this.setState({name: e.target.value}) }
                    />
                    <button type="button" className={classes.Btn} onClick={() =>this.state.name ? this.sendInfo() : this.alert() }>Agregar</button>
                </div>
            </div>
        )        
    }
}


const mapDispatchToProps = dispatch => {
    return{
        newCounter
    }
}

export default connect(null, mapDispatchToProps())(AddCounter)