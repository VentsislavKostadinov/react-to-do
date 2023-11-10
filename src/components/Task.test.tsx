import React from 'react'
import { Task } from './Task'
import { TaskProps } from '../model/TaskProps.types'
import { render } from '@testing-library/react'

describe('Task component', () => {
    const taskProps: TaskProps = {
        task: {
            id: 46456456456,
            description: 'text description',
            completed: false,
        },

        onEdit: jest.fn,
        onDelete: jest.fn,
        onComplete: jest.fn,
    }

    it('renders correctly', () => {
        const { asFragment } = render(<Task {...taskProps} />)
        expect(asFragment).toMatchSnapshot()
    })

    it('displayed correctly', () => {
        render(<Task {...taskProps} />)

        const container = document.querySelector('.container .col-lg-9')
        expect(container?.innerHTML).toContain('text description')
    })

})
