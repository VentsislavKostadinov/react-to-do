import { BaseProps } from './BaseProps.types'

export interface ButtonProps extends BaseProps {
    text: string
    variant: string
    type: 'button' | 'submit'
    handleClick?: () => void
}
