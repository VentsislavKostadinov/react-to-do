import React from 'react'
import { CommonInput } from './common/CommonInput'
import { SearchTaskProps } from './model/SearchTaskProps.types'

export const SearchTask = ({ value, handleSearchTask }: SearchTaskProps) => {
    return (
        <CommonInput
            type="search"
            placeholder="Search task"
            value={value}
            handleChange={handleSearchTask}
            className="search-task"
            dataTestid="search-task"
        />
    )
}
