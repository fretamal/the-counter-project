import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './total.module.css';
import {fetchCounters} from '../actions/'


class Total extends Component {

    render(){
        const total = this.props.counters ? this.props.counters.reduce((tot, counter) => tot + counter.value, 0) : 0
        return(
            <div className={classes.TotalWrapper}>
                <span className={classes.Total}>Total:</span> 
                <span className={classes.TotalValue}>{total}</span>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return{
        counters: state.counters.items
    }
}

export default connect(mapStateToProps)(Total)