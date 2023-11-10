import React from 'react'
import { TaskList } from './TaskList'
import { TaskListProps } from '../model/TaskListProps.types'
import { render, screen, fireEvent } from '@testing-library/react'

describe('TaskList component', () => {
    const taskListProps: TaskListProps = {
        tasks: [
            {
                task: {
                    id: 4534534,
                    description: 'text description',
                    completed: false,
                },
                onEdit: jest.fn,
                onComplete: jest.fn,
                onDelete: jest.fn,
            },
        ],
        onAdd: jest.fn,
        onEdit: jest.fn,
        onDelete: jest.fn,
        onComplete: jest.fn,
    }

    it('render correctly', () => {
        const { asFragment } = render(<TaskList {...taskListProps} />)
        expect(asFragment).toMatchSnapshot()
    })

    it('displayed correctly', () => {
        render(<TaskList {...taskListProps} />)

        const container = document.querySelectorAll('.container')

         expect(container[1].innerHTML).toContain('Edit')
         expect(container[1].innerHTML).toContain('Delete')
    })
})
