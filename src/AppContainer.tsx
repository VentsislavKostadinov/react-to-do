import React, { useState } from 'react'
import { AppButton } from './common/AppButton'
import { AppHeadline } from './common/AppHeadline'
import { Container, Form } from 'react-bootstrap'
import { AppInput } from './common/AppInput'
import { InvalidValiadationFeedback } from './common/InvalidValiadationFeedback'
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
            <AppHeadline title="To Do App" />
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <AppInput
                    type="text"
                    value={valueText}
                    handleChange={handleChange}
                    placeholder="Enter a description"
                    className="add-input"
                    dataTestid="add-input"
                >
                    <AppButton variant="primary" text="Add" type="submit" />
                    <InvalidValiadationFeedback text="Please type a description" />
                </AppInput>
            </Form>
            <h3>{submittedValue}</h3>
        </Container>
    )
}
