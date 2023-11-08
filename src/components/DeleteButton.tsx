import React from 'react'
import { CommonButton } from '../common/CommonButton'
import { DeleteButtonProps } from '../model/DeleteButtonProps.types'

export const DeleteButton = ({ handleClick }: DeleteButtonProps) => {
    return (
        <CommonButton
            text="Delete"
            variant="transparent"
            type="button"
            handleClick={handleClick}
        />
    )
}
