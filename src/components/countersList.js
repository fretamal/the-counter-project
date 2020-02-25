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

    // shouldComponentUpdate(nextProps) { 
    //     // console.log(nextProps.counters[0].name)
    //     console.log(this.props.counters)
    //     if(nextProps.counters[0].name !== this.props.counters[0].name) {
    //         return true
    //     }
    //     return false;
    // }

    renderCounters(){
        return this.props.counters.map((counter,index) =>{
            return(
                <Counter
                    key={index}
                    id={counter.id}
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
        counters: state.counters.filteredItems,
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