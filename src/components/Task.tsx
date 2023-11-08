import React, { useState } from 'react'
import { TaskProps } from '../model/TaskProps.types'
import { CommonInput } from '../common/CommonInput'
import { CommonButton } from '../common/CommonButton'
import { Form, Container, Row, Col } from 'react-bootstrap'
import { EditButton } from './EditButton'
import { DeleteButton } from './DeleteButton'
import classes from '../style/Task.module.scss'

export const Task = ({ task, onEdit, onDelete, onComplete }: TaskProps) => {
    const [isEditing, setIsEditing] = useState<TaskProps['task']['completed']>(
        task.completed,
    )
    const [editedTask, setEditedTask] = useState<
        TaskProps['task']['description']
    >(task.description)
    const [validated, setValidated] = useState<boolean>(false)

    const handleSave = (e: React.FormEvent) => {
        e.preventDefault()

        if (editedTask === '') {
            setValidated(true)
        } else {
            onEdit(task.id, editedTask)
            setIsEditing(false)
        }
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
        <Container className={classes.container}>
            <Row>
                <Col className={classes.task}>
                    {isEditing ? (
                        <Form
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
                    ) : (
                        <Row>
                            <Col>
                                <CommonInput
                                    type="checkbox"
                                    className="input-checkbox"
                                    data-testid="input-checkbox"
                                    checked={task.completed}
                                    handleChange={handleOnComplete}
                                />
                            </Col>
                            <Col
                                lg={9}
                                xs={10}
                                className={classes.taskDescription}
                            >
                                {task.description}
                            </Col>
                            <Col lg={2} className={classes.btn}>
                                <EditButton
                                    handleClick={handleEditTask}
                                    className={classes.btn}
                                />
                                <DeleteButton handleClick={handleDelete} />
                            </Col>
                        </Row>
                    )}
                </Col>
            </Row>
        </Container>
    )
}
