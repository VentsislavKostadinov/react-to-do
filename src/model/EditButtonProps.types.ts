import { ButtonProps } from './ButtonProps.types'

export interface EditButtonProps extends ButtonProps {
    handleClick: ButtonProps['handleClick']
}
