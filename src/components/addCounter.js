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
                    <button type="button" className={classes.Btn} onClick={() => this.props.newCounter(this.state.name) }>Agregar</button>
                </div>
            </div>
        )        
    }
}


const mapDispatchToProps = () => {
    return{
        newCounter
    }
}

export default connect('', mapDispatchToProps())(AddCounter)