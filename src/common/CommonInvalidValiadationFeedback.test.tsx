import React from 'react'
import { CommonInvalidValiadationFeedback } from './CommonInvalidValiadationFeedback'
import { CommonInvalidValiadationFeedbackProps } from '../model/CommonInvalidValiadationFeedbackProps.types'
import { render, screen } from '@testing-library/react'

describe('CommonInvalidValiadationFeedbackProps component', () => {
    const invalidFeedbackProps: CommonInvalidValiadationFeedbackProps = {
        text: 'Please add a description',
        dataTestid: 'invalid-feedback'
    }

    it('renders correctly', () => {
        const { asFragment } = render(
            <CommonInvalidValiadationFeedback
                {...invalidFeedbackProps}
            />,
        )

        expect(asFragment).toMatchSnapshot()
    })

    it('it corrects displayed', () => {
        render(
            <CommonInvalidValiadationFeedback
                {...invalidFeedbackProps}
            />,
        )

        const invalidFeedback = screen.getByTestId('invalid-feedback')
        expect(invalidFeedback).toHaveTextContent(invalidFeedbackProps.text)

    })
})
