import React from 'react'
import { render, cleanup, fireEvent, queryByText, queryByAltText} from '@testing-library/react'
import { Options } from './options'

afterEach(cleanup)

it("Se renderiza correctamente el componente <Options/>", () => {
    const {queryByTestId,queryByAltText,queryByPlaceholderText} = render(<Options/>)
    expect(queryByTestId('select')).toBeTruthy()
    expect(queryByAltText('buscar')).toBeTruthy()
    expect(queryByAltText('mayor')).toBeTruthy()
    expect(queryByAltText('menor')).toBeTruthy()
    expect(queryByPlaceholderText('Por nombre')).toBeTruthy()
    expect(queryByAltText('buscar')).toBeTruthy()
})

describe('funcionalidad de opciones', () => {

    it("Que se actualice al cambiar el orden", () => {
        const sortCounters = jest.fn()
        const {queryByTestId} = render(<Options sortCounters={sortCounters}/>)
        const select =  queryByTestId('select')
        fireEvent.change(select)
        expect(sortCounters).toHaveBeenCalled()
    })
    
    it("Que se actualice el input de mayor a y se llame a filtrar", () => {
        const filterByRange = jest.fn()
        const {queryByAltText} = render(<Options filterByRange={filterByRange}/>)
        const input =  queryByAltText('mayor')
        fireEvent.change(input,{target: {value: "1"}})
        expect(input.value).toBe("1")
        expect(filterByRange).toHaveBeenCalled()
    })

    it("Que se actualice el input de menor a y se llame a filtrar", () => {
        const filterByRange = jest.fn()
        const {queryByAltText} = render(<Options filterByRange={filterByRange}/>)
        const input =  queryByAltText('menor')
        fireEvent.change(input,{target: {value: "1"}})
        expect(input.value).toBe("1")
        expect(filterByRange).toHaveBeenCalled()
    })

    it("Que se llame a buscar elementos al apretar buscar", () => {
        const searchCounters = jest.fn() 
        const {queryByRole} = render(<Options searchCounters={searchCounters}/>)
        fireEvent.click(queryByRole('button'))
        expect(searchCounters).toHaveBeenCalled()
    })

})