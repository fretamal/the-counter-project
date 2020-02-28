import React from 'react'
import { render, cleanup, fireEvent, queryByText, queryByAltText} from '@testing-library/react'
import  Counter  from './counter'

afterEach(cleanup)

it("Se renderiza correctamente el <Counter/>", () => {
    const {queryByText,queryByAltText} = render(<Counter />)
    expect(queryByText('+')).toBeTruthy()
    expect(queryByText('-')).toBeTruthy()
    expect(queryByAltText('Borrar')).toBeTruthy()
})

describe('funcionalidad del contador', () => {
    it("Que se llame a incrementCount al apretar +", () => {
        const props = {incrementCount: jest.fn()}
        const {queryByText} = render(<Counter {...props}/>)
        const buttonPlus =  queryByText('+')
        fireEvent.click(buttonPlus)
        expect(props.incrementCount).toHaveBeenCalled()
    })

    it("Que se llame a decrementCount al apretar -", () => {
        const props = {decrementCount: jest.fn()}
        const {queryByText} = render(<Counter {...props}/>)
        const buttonMinus =  queryByText('-')
        fireEvent.click(buttonMinus)
        expect(props.decrementCount).toHaveBeenCalled()
    })

    // it("Que se llame a deleteCounter al apretar borrar", () => {
    //     const props = {deleteCounter: jest.fn()}
    //     const {queryByTestId} = render(<Counter {...props} />)
    //     const buttonDelete =  queryByTestId('Borrar')
    //     fireEvent.click(buttonDelete)
    //     expect(props.deleteCounter).toHaveBeenCalled()
    // })
})