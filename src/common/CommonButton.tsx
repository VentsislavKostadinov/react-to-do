import { Button } from 'react-bootstrap'
import { ButtonProps } from '../model/ButtonProps.types'

export const CommonButton = ({
    text,
    variant,
    type,
    handleClick,
    className,
    dataTestid,
}: ButtonProps) => {
    return (
        <Button
            data-testid={dataTestid}
            className={className}
            variant={variant}
            type={type}
            onClick={handleClick}
        >
            {text}
        </Button>
    )
}
