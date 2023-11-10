import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { CommonButton } from './CommonButton'
import { ButtonProps } from '../model/ButtonProps.types'

describe('CommonButton component', () => {
    const commonButtonProps: ButtonProps = {
        dataTestid: 'add-btn',
        text: 'Add',
        variant: 'transparent',
        type: 'submit',
    }

    it('it renders correctly', () => {
        const { asFragment } = render(<CommonButton {...commonButtonProps} />)
        expect(asFragment()).toMatchSnapshot()
    })

    it('it is visible and correct props', () => {
        
        render(
            <CommonButton {...commonButtonProps} />,
        )

        const addButton = screen.getByTestId('add-btn')
        expect(addButton).toHaveTextContent(commonButtonProps.text)
        expect(addButton).toHaveAttribute('type', 'submit')
        expect(addButton).toBeInTheDocument
    })

    it('clicking works', () => {
        const handleClick = jest.fn()
        render(
            <CommonButton handleClick={handleClick} {...commonButtonProps} />,
        )

        const addButton = screen.getByTestId('add-btn')
        fireEvent.click(addButton)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
})
