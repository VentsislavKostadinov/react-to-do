import { ButtonProps } from './ButtonProps.types'

export interface DeleteButtonProps extends ButtonProps {
    handleClick: ButtonProps['handleClick']
}
