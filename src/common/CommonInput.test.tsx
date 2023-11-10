import React from 'react'
import { CommonInput } from './CommonInput'
import { CommonInputProps } from '../model/CommonInputProps.types'
import { render, screen, fireEvent } from '@testing-library/react'

describe('CommonInput component', () => {
    const commonInputProps: CommonInputProps = {
        type: 'text',
        label: 'Add text',
        value: 'John Doe',
        checked: false,
        handleChange: jest.fn(),
        placeholder: 'Enter a description',
        dataTestid: 'input-type',
    }

    it('render correctly', () => {
        const { asFragment } = render(<CommonInput {...commonInputProps} />)
        expect(asFragment()).toMatchSnapshot()
    })

    it('type input value', () => {
        const testInputValue = 'John Doe'
        render(<CommonInput {...commonInputProps} />)

        const inputValue = screen.getByTestId('input-type')
        fireEvent.change(inputValue, { target: { value: testInputValue } })

        expect(inputValue).toHaveValue(testInputValue)
    })
})
