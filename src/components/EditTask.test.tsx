import React from 'react'
import { EditTask } from './EditTask'
import { EditTaskProps } from '../model/EditTaskProps.types'
import { render, screen, fireEvent } from '@testing-library/react'
import { AddTask } from './AddTask'
import { EditButton } from './EditButton'
import { TaskList } from './TaskList'

describe('EditTask component', () => {
    const editTaskProps: EditTaskProps = {
        task: {
            id: 43853454,
            description: 'test description',
            completed: false,
        },
        validated: false,
        handleSave: jest.fn,
        editedTask: 'updated task',
        saveEditedTask: jest.fn,
    }

    it('renders correctly', () => {
        const { asFragment } = render(<EditTask {...editTaskProps} />)
        expect(asFragment).toMatchSnapshot()
    })

    it('displayed correctly', () => {
        const handleOnAddTaskClick = jest.fn()

        render(<AddTask onAdd={handleOnAddTaskClick} />)

        const addInputValue = screen.getByTestId('add-input')
        expect(addInputValue).toBeInTheDocument

        fireEvent.change(addInputValue, {
            target: { value: 'new test description' },
        })

        expect(addInputValue).toHaveValue('new test description')
        const handleEditClick = jest.fn
        render(<EditButton handleClick={handleEditClick} />)

        const editBtn = screen.getByTestId('edit-btn')
        fireEvent.click(editBtn)
        render(<EditTask {...editTaskProps} />)
        const inputEditTask = screen.getByTestId('input-text-edit')
        fireEvent.change(inputEditTask, { target: { value: 'new value' } })

        // Save edited task
        const saveEditedTask = screen.getByTestId('save-edit-task-btn')
        fireEvent.click(saveEditedTask)
    
        render(<TaskList tasks={[]} onAdd={function (task: string): void {
            throw new Error('Function not implemented.')
        } } onEdit={function (id: number, editedTask: string): void {
            throw new Error('Function not implemented.')
        } } onDelete={function (id: number): void {
            throw new Error('Function not implemented.')
        } } onComplete={function (id: number): void {
            throw new Error('Function not implemented.')
        } } />)

        const emptyTaskListTile = screen.getByTestId('empty-task-list')
        expect(emptyTaskListTile).not.toBeVisible

 
       
    })
})
