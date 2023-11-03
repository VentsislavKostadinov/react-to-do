import { ReactNode } from 'react'
import { BaseProps } from './BaseProps'
export interface InputProps extends BaseProps {
    type: string
    label?: string
    value: string
    //validated: string
    handleChange: React.ChangeEventHandler<HTMLElement>
    //handleSubmit: React.FormEvent<HTMLElement>
    placeholder?: string
    children?: ReactNode
}
