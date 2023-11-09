import { BaseProps } from './BaseProps.types'
import { ButtonProps } from './ButtonProps.types'

export interface DeleteButtonProps extends BaseProps {
    handleClick: ButtonProps['handleClick']
}
