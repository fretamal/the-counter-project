import React from 'react'
import { render, cleanup, fireEvent, queryByText, queryByAltText} from '@testing-library/react'
import { AddCounter } from './addCounter'

afterEach(cleanup)

it("Se renderiza correctamente el componente <AddCounter/>", () => {
    const {queryByText,queryByPlaceholderText} = render(<AddCounter/>)
    expect(queryByText('Nuevo')).toBeTruthy()
    expect(queryByPlaceholderText('Ingresa un nombre')).toBeTruthy()
    expect(queryByText('Agregar')).toBeTruthy()
})

describe('funcionalidad de agregar contador', () => {
    
    // it("Que se llame a enviar los datos el apretar agregar", () => {
    //     const sendInfo = jest.fn() 
    //     const props = {newCounter: jest.fn()}
    //     const {queryByText} = render(<AddCounter {...props} onClick={sendInfo}/>)
    //     fireEvent.click(queryByText('Agregar'))
    //     expect(sendInfo).toHaveBeenCalled()
    // })

    it("Que se actualice el input", () => {
        const {queryByPlaceholderText} = render(<AddCounter/>)
        const input =  queryByPlaceholderText('Ingresa un nombre')
        fireEvent.change(input,{target: {value: "Nuevo Contador"}})
        expect(input.value).toBe("Nuevo Contador")
    })
})