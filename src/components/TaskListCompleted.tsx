import React from 'react'
import { TaskListCompletedProps } from '../model/TaskListCompletedProps.types'
import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import './TaskListCompleted.scss'
import { CommonHeadline } from '../common/CommonHeadline'
import { TaskProps } from '../model/TaskProps.types'

export const TaskCompletedList = ({ tasks }: TaskListCompletedProps) => {
    return (
        <Container>
            <Row>
                <Col>
                    {tasks.length !== 0 ? (
                        <>
                            <CommonHeadline
                                title="Completed Tasks"
                                heading="h2"
                            />
                            <div className="task-list-wrap">
                                <ListGroup>
                                    {tasks.map(
                                        (
                                            task: TaskProps | any,
                                            index: number,
                                        ) =>
                                            task.completed && (
                                                <div key={index}>
                                                    <ListGroup.Item
                                                        key={task.id}
                                                    >
                                                        <del>
                                                            {task.description}
                                                        </del>
                                                    </ListGroup.Item>
                                                    <hr />
                                                </div>
                                            ),
                                    )}
                                </ListGroup>
                            </div>
                        </>
                    ) : null}
                </Col>
            </Row>
        </Container>
    )
}
