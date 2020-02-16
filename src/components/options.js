import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './options.module.css';


class Options extends Component {
    render(){
        return(
            <div className={classes.OptionsWrapper}>
              <div className={classes.SortWrapper}>
                    <span className={classes.SortBy}>Ordernar por</span>
                    <select className={classes.SortSelect}>
                        <option>Nombre</option>
                        <option>Cantidad Ascendente</option>
                        <option>Cantidad Descendente</option>
                    </select>
                </div>
                <div className={classes.FilterWrapper}>
                    <p className={classes.FilterText}>Filtrar</p>
                    <table>
                        <tr>
                            <td>
                                <span className={classes.FilterOption}>Más de:</span>
                            </td>
                            <td>
                                <input className={classes.FilterInput}/>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <span className={classes.FilterOption}>Menos de:</span>
                            </td>
                            <td>
                                <input className={classes.FilterInput}/>
                            </td>
                        </tr>
                    </table>
                </div>
                <div className={classes.SearchWrapper}>
                    <p className={classes.SearchText}>Buscar</p>
                    <input className={classes.SearchInput} placeholder="Por nombre" type="text"></input>
                    <button className={classes.SearchBtn}>
                    <img className={classes.SearchImg} src={require('../assets/search2.png')}/>    

                    </button>
                </div>
            </div> 
        )
    }
}


const mapStateToProps = (state) => {
    return{
    }
}


export default connect(mapStateToProps)(Options)