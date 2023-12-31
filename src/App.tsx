import React, { useState, useEffect } from 'react'
import { TaskList } from './components/TaskList'
import { TaskListProps } from './model/TaskListProps.types'
import { TaskListCompleted } from './components/TaskListCompleted'
import { TaskSearch } from './components/TaskSearch'
import { CommonHeadline } from './common/CommonHeadline'
import { Col, Container, Row } from 'react-bootstrap'
import classes from './style/App.module.scss'

export const App = () => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem('tasks')!) || [],
    )
    const [filteredTasks, setFilteredTasks] = useState<TaskListProps['tasks']>(
        [],
    )

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    const addTask = (description: string) => {
        if (description) {
            const newTask = {
                id: new Date().getTime(),
                description: description,
                completed: false,
            }
            setTasks([...tasks, newTask])
        }
    }
    const editTask = (taskId: number, newDescription: string) => {
        setTasks((prevTasks: TaskListProps['tasks']) =>
            prevTasks.map((task: any) =>
                task.id === taskId
                    ? { ...task, description: newDescription }
                    : task,
            ),
        )
    }
    const deleteTask = (taskId: number) => {
        setTasks((prevTasks: TaskListProps['tasks']) =>
            prevTasks.filter((task: any) => task.id !== taskId),
        )
    }

    const completeTask = (taskId: number) => {
        setTasks((prevTasks: TaskListProps['tasks']) =>
            prevTasks.map((task: any) =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task,
            ),
        )
    }

    const sortIncompletedTasks = (taskList: TaskListProps['tasks']) => {
        return taskList.filter((task: any) => !task.completed)
    }

    const filterTasks = (filterTask: string) => {
        if (filterTask.trim() === '') {
            setFilteredTasks([])
        } else {
            const filtered = sortIncompletedTasks(tasks).filter((task: any) =>
                task.description
                    .toLowerCase()
                    .includes(filterTask.toLowerCase()),
            )
            setFilteredTasks(filtered)
        }
    }

    return (
        <Container className={classes.toDo}>
            <Row>
                <Col>
                    <CommonHeadline title="To Do App" heading="h2" />
                    <TaskSearch filterTasks={filterTasks} />
                    <TaskList
                        tasks={
                            filteredTasks.length > 0
                                ? filteredTasks
                                : sortIncompletedTasks(tasks)
                        }
                        onAdd={addTask}
                        onEdit={editTask}
                        onDelete={deleteTask}
                        onComplete={completeTask}
                    />
                    <TaskListCompleted tasks={tasks} />
                </Col>
            </Row>
        </Container>
    )
}
