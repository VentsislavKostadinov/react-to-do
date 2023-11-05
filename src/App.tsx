import React, { useState, useEffect } from 'react'
import './App.scss'
import { TaskList } from './TaskList'
import { TaskProps } from './model/TaskProps.types'
import { TaskListProps } from './model/TaskListProps.types'
import { TaskCompletedList } from './TaskListCompleted'

export const App = () => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem('tasks')!) || [],
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
        setTasks((prevTasks: Array<TaskListProps>) => {
            return prevTasks.map((task: TaskProps | any) =>
                task.id === taskId
                    ? { ...task, completed: !task.completed }
                    : task,
            )
        })
    }

    const sortIncompletedTasks = (taskList: TaskListProps | any) => {
        return taskList.filter((task: TaskProps['task']) => !task.completed)
    }

    return (
        <div className="to-do">
            <TaskList
                tasks={sortIncompletedTasks(tasks)}
                onAdd={addTask}
                onEdit={editTask}
                onDelete={deleteTask}
                onComplete={completeTask}
            />
            <TaskCompletedList tasks={tasks} />
        </div>
    )
}
