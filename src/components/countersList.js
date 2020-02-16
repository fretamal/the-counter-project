import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementCount, decrementCount, deleteCounter } from '../actions/'
import Counter from './counter'
import classes from './countersList.module.css';
import Total from './total'


class Counters extends Component {

    renderCounters(){
        return this.props.counters.map((counter,index) =>{
            return(
                <Counter
                    key={index}
                    index={index}
                    value={counter.value}
                    name={counter.name}
                    incrementCount={this.props.incrementCount}
                    decrementCount={this.props.decrementCount}
                    deleteCounter={this.props.deleteCounter}
                />
            )
        })
    } 

    render() {
        return (
            <div className={classes.CounterListWrapper}>
                <table className={classes.Table}>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th Style="text-align:center">Valor</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCounters()}
                    </tbody>
                </table>
                <Total/>
            </div>
        )        
    }
}

const mapStateToProps = (state) => {
    return{
        counters: state.counters
    }
}

const mapDispatchToProps = () => {
    return{
        incrementCount,
        decrementCount,
        deleteCounter
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Counters)