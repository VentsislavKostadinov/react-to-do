import React, { useState } from 'react'
import { CommonInput } from '../common/CommonInput'
import { TaskSearchProps } from '../model/TaskSearchProps.types'
import classes from '../style/TaskSearch.module.scss'

export const TaskSearch = ({ filterTasks }: TaskSearchProps) => {
    const [searchTask, setSearchTask] = useState('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchText = e.target.value
        setSearchTask(searchText)
        filterTasks(searchText)
    }

    return (
        <CommonInput
            type="search"
            placeholder="Search task"
            value={searchTask}
            handleChange={handleChange}
            className={classes.searchTask}
            dataTestid="search-task"
        />
    )
}
