import React, { useState } from 'react'
import { CommonButton } from './common/CommonButton'
import { CommonHeadline } from './common/CommonHeadline'
import { Container, Form } from 'react-bootstrap'
import { CommonInput } from './common/CommonInput'
import { CommonInvalidValiadationFeedback } from './common/CommonInvalidValiadationFeedback'
import './AppContainer.scss'

export const AppContainer = () => {
    const [valueText, setValueText] = useState<string>('')
    const [validated, setValidated] = useState<boolean>(false)
    const [submittedValue, setSubmittedValue] = useState<string>(valueText)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValueText(e.target.value)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        if (valueText === '') {
            setValidated(true)
        } else {
            setSubmittedValue(valueText)
            setValidated(false)
            setValueText('')
        }
    }

    return (
        <Container>
            <CommonHeadline title="To Do App" />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <CommonInput
                    type="text"
                    value={valueText}
                    handleChange={handleChange}
                    placeholder="Enter a description"
                    className="add-input"
                    dataTestid="add-input"
                >
                    <CommonButton variant="primary" text="Add" type="submit" />
                    <CommonInvalidValiadationFeedback text="Please type a description" />
                </CommonInput>
            </Form>
            <h3>{submittedValue}</h3>
        </Container>
    )
}
