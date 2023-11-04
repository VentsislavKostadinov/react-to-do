import React, { useState } from 'react'
import { TaskProps } from './model/TaskProps.types'
import { CommonInput } from './common/CommonInput'
import { CommonButton } from './common/CommonButton'
import { ListGroup } from 'react-bootstrap'
import './Task.scss'

export const Task = ({ task, onEdit, onDelete, onComplete }: TaskProps) => {
    const [isEditing, setIsEditing] = useState<boolean>(false)
    const [editedTask, setEditedTask] = useState<
        TaskProps['task']['description']
    >(task.description)
    const handleSave = () => {
        onEdit(task.id, editedTask)
        setIsEditing(false)
    }
    const saveEditedTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedTask(e.target.value)
    }
    const handleEditTask = () => {
        setIsEditing(true)
    }

    const handleOnComplete = () => {
        onComplete(task.id)
    }

    const handleDelete = () => {
        onDelete(task.id)
    }

    return (
        <ListGroup
            horizontal
            className={`task ${task.completed ? 'completed' : ''}`}
        >
            <ListGroup.Item>
                <CommonInput
                    type="checkbox"
                    className="input-checkbox"
                    data-testid="input-checkbox"
                    checked={task.completed}
                    handleChange={handleOnComplete}
                ></CommonInput>
            </ListGroup.Item>
            {isEditing ? (
                <ListGroup.Item>
                    <CommonInput
                        className="input-text-edit"
                        data-testid="input-text-edit"
                        type="text"
                        checked={task.completed}
                        handleChange={saveEditedTask}
                    />
                    <CommonButton
                        text="Save"
                        variant="info"
                        type="button"
                        handleClick={handleSave}
                    />
                </ListGroup.Item>
            ) : (
                <>
                    <ListGroup.Item>{task.description}</ListGroup.Item>
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
