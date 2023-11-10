import React from 'react'
import { CommonButton } from '../common/CommonButton'
import { EditButtonProps } from '../model/EditButtonProps.types'

export const EditButton = ({ handleClick }: EditButtonProps) => {
    return (
        <CommonButton
            text="Edit"
            variant="transparent"
            type="button"
            handleClick={handleClick}
            dataTestid='edit-btn'
        />
    )
}
