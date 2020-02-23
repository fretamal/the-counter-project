import React, { Component } from 'react'
import { connect } from 'react-redux'
import { newCounter } from '../actions/'
import classes from './addCounter.module.css'

class AddCounter extends Component {

    constructor(props){
        super(props)

        this.state = {
            name: '',

        }
    }
    render() {

        function makeid(length) {
            var result           = '';
            var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var charactersLength = characters.length;
            for ( var i = 0; i < length; i++ ) {
               result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
         }

         
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
                    <button type="button" className={classes.Btn} onClick={() => this.props.newCounter(makeid(7),this.state.name,0) }>Agregar</button>
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