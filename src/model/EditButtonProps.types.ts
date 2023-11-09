import { BaseProps } from './BaseProps.types'
import { ButtonProps } from './ButtonProps.types'

export interface EditButtonProps extends BaseProps {
    handleClick: ButtonProps['handleClick']
}
