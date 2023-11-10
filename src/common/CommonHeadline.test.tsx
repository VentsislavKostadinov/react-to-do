import React from 'react'
import { CommonHeadline } from './CommonHeadline'
import { CommonHeadlineProps } from '../model/CommonHeadlineProps.types'
import { render, screen } from '@testing-library/react'

describe('CommonHeadline component', () => {
    const commonHeadlineProps: CommonHeadlineProps = {
        dataTestid: 'to-do-app',
        title: 'To Do App',
        heading: 'h2',
    }

    it('it renders correctly', () => {
        const { asFragment } = render(
            <CommonHeadline {...commonHeadlineProps} />,
        )
        expect(asFragment()).toMatchSnapshot()
    })

    it('it is visible and correct props', () => {
        render(<CommonHeadline {...commonHeadlineProps} />)

        const title = screen.getByTestId('to-do-app')
        expect(title).toHaveTextContent(commonHeadlineProps.title)
        expect(title).toBeInTheDocument
    })
})
