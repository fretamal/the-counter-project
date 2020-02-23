import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCounters, incrementCount, decrementCount, deleteCounter } from '../actions/'
import Counter from './counter'
import classes from './countersList.module.css';
import Total from './total'


class Counters extends Component {

    constructor(props){
        super(props)
        this.props.fetchCounters();
    }

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
                            <th>Valor</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.counters && this.renderCounters()}
                    </tbody>
                </table>
                <Total/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        counters: state.counters.items,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchCounters,
        incrementCount,
        decrementCount,
        deleteCounter,
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Counters)