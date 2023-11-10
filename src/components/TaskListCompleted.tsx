import React from 'react'
import { TaskListCompletedProps } from '../model/TaskListCompletedProps.types'
import { Col, Container, Row } from 'react-bootstrap'
import classes from '../style/TaskListCompleted.module.scss'
import { CommonHeadline } from '../common/CommonHeadline'
import { TaskProps } from '../model/TaskProps.types'

export const TaskListCompleted = ({ tasks }: TaskListCompletedProps) => {
    return (
        <Container>
            <Row>
                <Col>
                    {tasks.length !== 0 ? (
                        <>
                            <CommonHeadline
                                dataTestid="completed-tasks"
                                title="Completed Tasks"
                                heading="h2"
                            />
                            <div className={classes.taskCompleteWrap}>
                                {tasks.map(
                                    (task: TaskProps | any, index: number) =>
                                        task.completed && (
                                            <div key={index}>
                                                <div
                                                    className={
                                                        classes.completedItems
                                                    }
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
