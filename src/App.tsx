import React, { useState, useEffect } from 'react'
import './App.scss'
import { TaskList } from './TaskList'
import { TaskProps } from './model/TaskProps.types'
import { TaskListProps } from './model/TaskListProps.types'
import { TaskCompletedList } from './TaskListCompleted'
import { SearchTask } from './SearchTask'
import { CommonHeadline } from './common/CommonHeadline'
import { Container } from 'react-bootstrap'

export const App = () => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem('tasks')!) || [],
    )
    const [searchTask, setSearchTask] = useState<string>('')
    const [filteredTasks, setFilteredTasks] = useState(tasks)

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
        setTasks((prevTasks: Array<TaskListProps>) =>
            prevTasks.map((task: TaskProps | any) =>
                task.id === taskId
                    ? { ...task, description: newDescription }
                    : task,
            ),
        )
    }
    const deleteTask = (taskId: number) => {
        setTasks((prevTasks: Array<TaskListProps>) =>
            prevTasks.filter((task: TaskProps | any) => task.id !== taskId),
        )
    }

    const completeTask = (taskId: number) => {
        setTasks((prevTasks: Array<TaskListProps>) =>
            prevTasks.map((task: TaskProps | any) =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task,
            ),
        )
    }

    const sortIncompletedTasks = (taskList: TaskListProps | any) => {
        if (searchTask === '') {
            return taskList.filter((task: TaskProps['task']) => !task.completed)
        } else {
            return filteredTasks.filter(
                (task: TaskProps['task']) => !task.completed,
            )
        }
    }

    const handleSearchTask = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value
        setSearchTask(searchTerm)

        const filteredItems: TaskListProps = tasks.filter((task: any) =>
            task.description.toLowerCase().includes(searchTerm.toLowerCase()),
        )
        setFilteredTasks(filteredItems)
    }

    return (
        <Container className="to-do">
            <CommonHeadline title="To Do App" heading="h2" />
            <SearchTask
                value={searchTask}
                handleSearchTask={handleSearchTask}
            />
            <TaskList
                tasks={sortIncompletedTasks(tasks)}
                onAdd={addTask}
                onEdit={editTask}
                onDelete={deleteTask}
                onComplete={completeTask}
            />
            <TaskCompletedList tasks={tasks} />
        </Container>
    )
}
