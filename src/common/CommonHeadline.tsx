import { HeadlineProps } from '../model/HeadlineProps.types'
import classes from '../style/CommonHeadline.module.scss'

export const CommonHeadline = ({ title, heading }: HeadlineProps) => (
    <p className={`${classes.title} ${heading}`}>{title}</p>
)
