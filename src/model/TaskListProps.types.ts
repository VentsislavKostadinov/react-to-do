import { BaseProps } from './BaseProps.types'
import { TaskProps } from './TaskProps.types'

export interface TaskListProps extends BaseProps {
    tasks: TaskProps[]
    onAdd: (task: string) => void
    onEdit: TaskProps['onEdit']
    onDelete: TaskProps['onDelete']
    onComplete: TaskProps['onComplete']
}
