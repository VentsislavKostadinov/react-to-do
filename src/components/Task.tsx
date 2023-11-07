import React, { useState } from 'react'
import { TaskProps } from '../model/TaskProps.types'
import { CommonInput } from '../common/CommonInput'
import { CommonButton } from '../common/CommonButton'
import { ListGroup, Form } from 'react-bootstrap'
import './Task.scss'

export const Task = ({ task, onEdit, onDelete, onComplete }: TaskProps) => {
    const [isEditing, setIsEditing] = useState<TaskProps['task']['completed']>(
        task.completed,
    )
    const [editedTask, setEditedTask] = useState<
        TaskProps['task']['description']
    >(task.description)
    const [validated, setValidated] = useState<boolean>(false)
    const [hideCheckbox, setHideCheckbox] = useState<boolean>(false)

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault()

        if (editedTask === '') {
            setValidated(true)
        } else {
            onEdit(task.id, editedTask)
            setIsEditing(false)
        }
        setHideCheckbox(false)
    }
    const saveEditedTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedTask(e.target.value)
    }
    const handleEditTask = () => {
        setIsEditing(true)
        setHideCheckbox(true)
    }

    const handleOnComplete = () => {
        onComplete(task.id)
    }

    const handleDelete = () => {
        onDelete(task.id)
    }

    return (
        <ListGroup className="task" horizontal={task.description.length <= 20}>
            {!hideCheckbox ? (
                <ListGroup.Item>
                    <CommonInput
                        type="checkbox"
                        className="input-checkbox"
                        data-testid="input-checkbox"
                        checked={task.completed}
                        handleChange={handleOnComplete}
                    />
                </ListGroup.Item>
            ) : null}
            {isEditing ? (
                <ListGroup.Item>
                    <Form
                        className="d-flex"
                        noValidate
                        validated={validated}
                        onSubmit={handleSave}
                    >
                        <CommonInput
                            className="input-text-edit"
                            data-testid="input-text-edit"
                            type="text"
                            value={editedTask}
                            checked={task.completed}
                            handleChange={saveEditedTask}
                        />
                        <CommonButton
                            text="Save"
                            variant="transparent"
                            type="submit"
                        />
                    </Form>
                </ListGroup.Item>
            ) : (
                <>
                    <ListGroup.Item className={'task-description'}>
                        {task.description}
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <CommonButton
                            text="Edit"
                            variant="transparent"
                            type="button"
                            handleClick={handleEditTask}
                        />
                    </ListGroup.Item>
                </>
            )}
            <ListGroup.Item>
                <CommonButton
                    text="Delete"
                    variant="transparent"
                    type="button"
                    handleClick={handleDelete}
                />
            </ListGroup.Item>
        </ListGroup>
    )
}
