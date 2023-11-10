import React from "react"
import { fireEvent, render, screen } from "@testing-library/react"
import { AddTask } from "./AddTask"
import { AddTaskProps } from "../model/AddTaskProps.types"

describe('AddTask component', () => {

    const addTaskProps: AddTaskProps = {
        onAdd: jest.fn
    }

    it('renders correctly', ()=> {

        const {asFragment} = render(<AddTask {...addTaskProps} />)

        expect(asFragment).toMatchSnapshot()
    })

    it('displayed correctly', () => {
        const testInputValue = 'John Doe'
        render(<AddTask {...addTaskProps} />)

        const addInputValue = screen.getByTestId('add-input')
        expect(addInputValue).toBeVisible
        addInputValue
        fireEvent.change(addInputValue, { target: { value: testInputValue } })

        expect(addInputValue).toHaveValue(testInputValue)
    })
})