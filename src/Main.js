import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './App.module.css';
import { resetFetchApiFail } from './actions/'
import CountersList from './components/countersList'
import AddCounter from './components/addCounter'
import Options from './components/options'
import ErroModal from './components/errorModal'

export class Main extends Component {
    
    render() {
        return (
            <div className={classes.ContentWrapper}>

                <div className={classes.HeaderWrapper}>
                    <h1 className={classes.Titulo}>Contadores</h1>
                    <AddCounter/>
                </div>
                <div className={classes.MainWrapper}>
                    <div className={classes.SideBar}>
                        <Options/>
                        {this.props.error && <ErroModal errorMsg={this.props.errormsg} resetFetchApiFail={this.props.resetFetchApiFail}/> }
                        <CountersList/> 
                    </div>
                </div>
            </div>
        )        
    }
}

const mapStateToProps = (state) => {
    return{
        error: state.counters.error,
        errormsg: state.counters.errormsg
    }
}

const mapDispatchToProps = dispatch => {
    return{
        resetFetchApiFail
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Main)