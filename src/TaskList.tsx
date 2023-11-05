import React, { useState } from 'react'
import { TaskListProps } from './model/TaskListProps.types'
import { Container, Form } from 'react-bootstrap'
import { CommonButton } from './common/CommonButton'
import { CommonHeadline } from './common/CommonHeadline'
import { CommonInput } from './common/CommonInput'
import { CommonInvalidValiadationFeedback } from './common/CommonInvalidValiadationFeedback'
import { Task } from './Task'
import { TaskProps } from './model/TaskProps.types'
import './TaskList.scss'

export const TaskList = ({
    tasks,
    onAdd,
    onEdit,
    onDelete,
    onComplete,
}: TaskListProps) => {
    const [newTask, setNewTask] = useState<string>('')
    const [validated, setValidated] = useState<boolean>(false)

    const handleSetNewTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        if (newTask === '') {
            setValidated(true)
        } else {
            setValidated(false)
            onAdd(newTask)
            setNewTask('')
        }
    }

    return (
        <div>
            <Container>
                <CommonHeadline title="To Do App" heading="h2" />
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                    <CommonInput
                        type="text"
                        value={newTask}
                        handleChange={handleSetNewTask}
                        placeholder="Enter a description"
                        className="add-input"
                        dataTestid="add-input"
                    >
                        <CommonButton
                            variant="primary"
                            text="Add"
                            type="submit"
                        />
                        <CommonInvalidValiadationFeedback text="Please type a description" />
                    </CommonInput>
                </Form>
                {tasks.length !== 0 ? (
                    tasks.map((task: TaskProps | any, index: number) => {
                        return (
                            <Task
                                key={index}
                                task={task}
                                onEdit={onEdit}
                                onDelete={onDelete}
                                onComplete={onComplete}
                            />
                        )
                    })
                ) : (
                    <CommonHeadline title="You list is empty" heading="h3" />
                )}
            </Container>
        </div>
    )
}
