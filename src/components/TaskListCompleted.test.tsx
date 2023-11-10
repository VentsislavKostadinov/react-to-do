import React from 'react'
import { TaskListCompleted } from './TaskListCompleted'
import { TaskListCompletedProps } from '../model/TaskListCompletedProps.types'
import { render, screen } from '@testing-library/react'

describe('TaskListCompleted component', () => {
    const taskListCompletedProps: TaskListCompletedProps = {
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
    }

    it('renders correctly', () => {
        const { asFragment } = render(
            <TaskListCompleted {...taskListCompletedProps} />,
        )
        expect(asFragment).toMatchSnapshot()
    })

    it('displayed correctly', () => {
        render(<TaskListCompleted {...taskListCompletedProps} />)

        const completedTasksTitle = screen.getByTestId('completed-tasks')
        expect(completedTasksTitle).toBeInTheDocument

        const container = document.querySelector('.container')
        expect(container?.innerHTML).toContain('Completed Tasks')
    })
})
