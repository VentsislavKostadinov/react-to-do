import React, { useState } from 'react'
import { TaskProps } from './model/TaskProps.types'
import { CommonInput } from './common/CommonInput'
import { CommonButton } from './common/CommonButton'

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
        <div className={`task ${task.completed ? 'completed' : ''}`}>
            <CommonInput
                type="checkbox"
                className="input-checkbox"
                data-testid="input-checkbox"
                checked={task.completed}
                handleChange={handleOnComplete}
            ></CommonInput>
            {isEditing ? (
                <>
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
                </>
            ) : (
                <>
                    <p>{task.description}</p>
                    <CommonButton
                        text="Edit"
                        variant="info"
                        type="button"
                        handleClick={handleEditTask}
                    />
                </>
            )}
            <CommonButton
                text="Delete"
                variant="warning"
                type="button"
                handleClick={handleDelete}
            />
        </div>
    )
}
