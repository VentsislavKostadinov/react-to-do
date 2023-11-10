import { BaseProps } from "./BaseProps.types"

export interface CommonHeadlineProps extends BaseProps {
    title: string
    heading: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}
