import { ReactNode } from 'react'
import { BaseProps } from './BaseProps.types'
export interface InputProps extends BaseProps {
    type: string
    label?: string
    value?: string
    checked?: boolean
    handleChange: React.ChangeEventHandler<HTMLElement>
    placeholder?: string
    children?: ReactNode
}
