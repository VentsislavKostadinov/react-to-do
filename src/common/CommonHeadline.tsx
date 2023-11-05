import { HeadlineProps } from '../model/HeadlineProps.types'
import './CommonHeadline.scss'

export const CommonHeadline = ({ title, heading }: HeadlineProps) => (
    <p className={heading}>{title}</p>
)
