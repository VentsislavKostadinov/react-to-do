import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { CommonButton } from '../common/CommonButton'
import { CommonInput } from '../common/CommonInput'
import { CommonInvalidValiadationFeedback } from '../common/CommonInvalidValiadationFeedback'
import { AddTaskProps } from '../model/AddTaskProps.types'
import classes from '../style/TaskList.module.scss'

export const AddTask = ({onAdd}: AddTaskProps) => {
    const [newTask, setNewTask] = useState<string>('')
    const [validated, setValidated] = useState<boolean>(false)

    const handleSetNewTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        if (newTask === '') {
            setValidated(true)
        } else {
            setValidated(false)
            onAdd(newTask)
            setNewTask('')
        }
    }

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <CommonInput
                type="text"
                value={newTask}
                handleChange={handleSetNewTask}
                placeholder="Enter a description"
                className={classes.addInput}
                dataTestid="add-input"
            >
                <CommonButton data-testid='add-btn' variant="info" text="Add" type="submit" />
                <CommonInvalidValiadationFeedback text="Please type a description" />
            </CommonInput>
        </Form>
    )
}
