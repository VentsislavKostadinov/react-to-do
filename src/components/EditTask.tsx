import React from 'react'
import { Form } from 'react-bootstrap'
import { CommonButton } from '../common/CommonButton'
import { CommonInput } from '../common/CommonInput'
import { EditTaskProps } from '../model/EditTaskProps.types'

export const EditTask = ({ task, validated, handleSave, editedTask, saveEditedTask }: EditTaskProps) => {

    return (
        <Form noValidate validated={validated} onSubmit={handleSave}>
            <CommonInput
                className="input-text-edit"
                dataTestid="input-text-edit"
                type="text"
                value={editedTask}
                checked={task.completed}
                handleChange={saveEditedTask}
            />
            <CommonButton dataTestid='save-edit-task-btn' text="Save" variant="transparent" type="submit" />
        </Form>
    )
}
