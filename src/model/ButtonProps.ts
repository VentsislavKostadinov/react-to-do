import { BaseProps } from './BaseProps'

export interface ButtonProps extends BaseProps {
    text: string
    variant: string
    type: 'button' | 'submit'
}
