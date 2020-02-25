import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './options.module.css';
import { filterByMax, sortCounters } from '../actions/'

class Options extends Component {
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
                                <input className={classes.FilterInput} onChange={(e)=> this.props.filterByMax(this.props.counters,e.target.value)}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className={classes.FilterOption}>Menor a:</span>
                            </td>
                            <td>
                                <input className={classes.FilterInput}/>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div className={classes.SearchWrapper}>
                    <p className={classes.SearchText}>Buscar</p>
                    <input className={classes.SearchInput} placeholder="Por nombre" type="text"></input>
                    <button className={classes.SearchBtn}>
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
        sort: state.counters.sort
    }
}

const mapDispatchToProps = dispatch => {
    return{
        filterByMax,
        sortCounters,
    }
}



export default connect(mapStateToProps,mapDispatchToProps())(Options)