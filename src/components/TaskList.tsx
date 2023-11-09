import React, { useState } from 'react'
import { TaskListProps } from '../model/TaskListProps.types'
import { Container, Form, Row, Col } from 'react-bootstrap'
import { CommonButton } from '../common/CommonButton'
import { CommonHeadline } from '../common/CommonHeadline'
import { CommonInput } from '../common/CommonInput'
import { CommonInvalidValiadationFeedback } from '../common/CommonInvalidValiadationFeedback'
import { Task } from './Task'
import { TaskProps } from '../model/TaskProps.types'
import classes from '../style/TaskList.module.scss'
import { AddTask } from './AddTask'

export const TaskList = ({
    tasks,
    onAdd,
    onEdit,
    onDelete,
    onComplete,
}: TaskListProps) => {

    return (
        <Container className={classes.container}>
            <Row>
                <Col className={classes.col}>
                    <AddTask onAdd={onAdd} />
                    <CommonHeadline title="Task list" heading="h2" />
                    <div>
                        {tasks.length !== 0 ? (
                            tasks.map(
                                (task: TaskProps | any, index: number) => (
                                    <div key={index}>
                                        <Task
                                            task={task}
                                            onEdit={onEdit}
                                            onDelete={onDelete}
                                            onComplete={onComplete}
                                        />
                                        <hr />
                                    </div>
                                ),
                            )
                        ) : (
                            <CommonHeadline
                                title="You list is empty"
                                heading="h3"
                            />
                        )}
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
