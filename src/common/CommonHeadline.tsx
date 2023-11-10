import { CommonHeadlineProps } from '../model/CommonHeadlineProps.types'
import classes from '../style/CommonHeadline.module.scss'

export const CommonHeadline = ({
    title,
    heading,
    dataTestid,
}: CommonHeadlineProps) => (
    <p data-testid={dataTestid} className={`${classes.title} ${heading}`}>
        {title}
    </p>
)
