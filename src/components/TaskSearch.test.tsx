import React from 'react'
import { TaskSearch } from './TaskSearch'
import { TaskSearchProps } from '../model/TaskSearchProps.types'
import { render, screen } from '@testing-library/react'

describe('TaskSearch component', () => {
    const taskSearchProps: TaskSearchProps = {
        filterTasks: jest.fn,
    }

    it('renders correctly', () => {
        const { asFragment } = render(<TaskSearch {...taskSearchProps} />)
        expect(asFragment).toMatchSnapshot()
    })

    it('displayed correctly', () => {
        render(<TaskSearch {...taskSearchProps} />)

        const searchTask = screen.getByTestId('search-task')
        expect(searchTask).toBeInTheDocument
        expect(searchTask).toHaveAttribute('type', 'search')
    })
})
