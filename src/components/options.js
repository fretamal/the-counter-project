import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './options.module.css';
import {sortCounters, filterByRange, searchCounters } from '../actions/'

class Options extends Component {

    constructor(props){
        super(props)

        this.state = {
            search: '',

        }
    }

    render(){
        return(
            <div className={classes.OptionsWrapper}>
              <div className={classes.SortWrapper}>
                    <span className={classes.SortBy}>Ordernar por</span>
                    <select className={classes.SortSelect} value={this.props.sort} onChange={(e) => this.props.sortCounters(this.props.counters, e.target.value)}>
                        <option value="name">Nombre</option>
                        <option value="asc">Valor Ascendente</option>
                        <option value="desc">Valor Descendente</option>
                    </select>
                </div>
                <div className={classes.FilterWrapper}>
                    <p className={classes.FilterText}>Filtrar</p>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <span className={classes.FilterOption}>Mayor a:</span>
                            </td>
                            <td>
                                <input className={classes.FilterInput} value={this.props.max} onChange={(e)=> this.props.filterByRange(this.props.counters,e.target.value,this.props.min)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className={classes.FilterOption}>Menor a:</span>
                            </td>
                            <td>
                                <input className={classes.FilterInput} value={this.props.min} onChange={(e)=> this.props.filterByRange(this.props.counters,this.props.max,e.target.value)}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={classes.SearchWrapper}>
                    <p className={classes.SearchText}>Buscar</p>
                    <input className={classes.SearchInput} 
                        placeholder="Por nombre" 
                        type="text"
                        onChange={(e) => this.setState({search: e.target.value}) }
                    />
                    <button className={classes.SearchBtn} onClick={() => this.searchCounter((e) => this.props.counters, this.state.search)}>
                        <img className={classes.SearchImg} src={require('../assets/search2.png')} alt="buscar"/>    
                    </button>
                </div>
            </div> 
        )
    }
}


const mapStateToProps = (state) => {
    return{
        counters: state.counters.items,
        filteredItems: state.counters.filteredItems,
        max: state.counters.max,
        min: state.counters.min,
        sort: state.counters.sort,
        search: state.counters.search
    }
}

const mapDispatchToProps = dispatch => {
    return{
        filterByRange,
        sortCounters,
        searchCounters,
    }
}



export default connect(mapStateToProps,mapDispatchToProps())(Options)