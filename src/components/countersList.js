import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchCounters, incrementCount, decrementCount, deleteCounter, resetFetchApiFail } from '../actions/'
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
                    id={counter.id}
                    value={counter.value}
                    name={counter.name}
                    incrementCount={this.props.incrementCount}
                    decrementCount={this.props.decrementCount}
                    deleteCounter={this.props.deleteCounter}
                    loading={this.props.loading}
                    loadingid={this.props.loadingid}
                    error= {this.props.error}
                    errormsg= {this.props.errormsg}
                    resetFetchApiFail={this.props.resetFetchApiFail}
                />
            )
        })
    }

    render() {
        return (
            <div className={classes.CounterListWrapper}>
                { this.props.counters ?  (
                    <div>
                        <table className={classes.Table}>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th className={classes.TableRowCenter}>Valor</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.counters && this.renderCounters()}
                            </tbody>
                        </table>
                        <Total/>
                    </div>
                ):( 
                <p className={classes.EmptyList}>No hay contadores para mostrar</p>
                )
            }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        counters: state.counters.filteredItems,
        error: state.counters.error,
        errormsg: state.counters.errormsg,
        sort: state.counters.sort,
        loading: state.counters.loading,
        loadingid: state.counters.loadingid,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        fetchCounters,
        incrementCount,
        decrementCount,
        deleteCounter,
        resetFetchApiFail
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(Counters)