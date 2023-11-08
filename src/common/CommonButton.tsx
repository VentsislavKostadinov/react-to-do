import { Button } from 'react-bootstrap'
import { ButtonProps } from '../model/ButtonProps.types'
import classes from '../style/Task.module.scss'

export const CommonButton = ({
    text,
    variant,
    type,
    handleClick,
    dataTestid,
}: ButtonProps) => {
    return (
        <Button
            data-testid={dataTestid}
            className={classes.btn}
            variant={variant}
            type={type}
            onClick={handleClick}
        >
            {text}
        </Button>
    )
}
