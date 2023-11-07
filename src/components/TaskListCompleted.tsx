import React from 'react'
import { TaskListCompletedProps } from '../model/TaskListCompletedProps.types'
import { Col, Container, Row } from 'react-bootstrap'
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
                            <div className="task-complete-wrap">
                                {tasks.map(
                                    (task: TaskProps | any, index: number) =>
                                        task.completed && (
                                            <div key={index}>
                                                <div
                                                    className="completed-items "
                                                    key={task.id}
                                                >
                                                    <del>
                                                        {task.description}
                                                    </del>
                                                </div>
                                                <hr />
                                            </div>
                                        ),
                                )}
                            </div>
                        </>
                    ) : null}
                </Col>
            </Row>
        </Container>
    )
}
