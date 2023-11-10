import React from 'react'
import { TaskListProps } from '../model/TaskListProps.types'
import { Container, Row, Col } from 'react-bootstrap'
import { CommonHeadline } from '../common/CommonHeadline'
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
                    <CommonHeadline
                        dataTestid="task-list"
                        title="Task list"
                        heading="h2"
                    />
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
                                dataTestid="empty-task-list"
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
