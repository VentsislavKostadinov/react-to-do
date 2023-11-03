import { Button } from 'react-bootstrap'
import { ButtonProps } from '../model/ButtonProps'

export const AppButton = ({
    text,
    variant,
    type,
    className,
    dataTestid,
}: ButtonProps) => {
    return (
        <Button
            data-testid={dataTestid}
            className={className}
            variant={variant}
            type={type}
        >
            {text}
        </Button>
    )
}
