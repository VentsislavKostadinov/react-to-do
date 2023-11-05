import React from 'react'
import { TaskListCompletedProps } from './model/TaskListCompletedProps.types'
import { Container, ListGroup } from 'react-bootstrap'
import './TaskListCompleted.scss'
import { CommonHeadline } from './common/CommonHeadline'

export const TaskCompletedList = ({ tasks }: TaskListCompletedProps) => {
    return (
        <Container>
            {tasks.length !== 0 ? (
                <>
                    <CommonHeadline title="Completed Tasks" heading="h2" />
                    <ListGroup className="completed-list">
                        {tasks.map((task: any) => {
                            const completed = task.completed
                            return (
                                completed && (
                                    <ListGroup.Item key={task.id}>
                                        <del>{task.description}</del>
                                    </ListGroup.Item>
                                )
                            )
                        })}
                    </ListGroup>
                </>
            ) : null}
        </Container>
    )
}
