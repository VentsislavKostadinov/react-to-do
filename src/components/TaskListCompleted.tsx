import React from 'react'
import { TaskListCompletedProps } from '../model/TaskListCompletedProps.types'
import { Col, Container, Row } from 'react-bootstrap'
import classes from '../style/TaskListCompleted.module.scss'
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
                            <div className={classes.taskCompleteWrap}>
                                {tasks.map(
                                    (task: TaskProps, index: number) =>
                                        task.task.completed && (
                                            <div key={index}>
                                                <div
                                                    className={
                                                        classes.completedItems
                                                    }
                                                    key={task.task.id}
                                                >
                                                    <del>
                                                        {task.task.description}
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
