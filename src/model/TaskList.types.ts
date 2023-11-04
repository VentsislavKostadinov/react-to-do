import { TaskProps } from './TaskProps.types'

export interface TaskListProps {
    tasks: TaskProps[]
    onAdd: (task: string) => void
    onEdit: TaskProps['onEdit']
    onDelete: TaskProps['onDelete']
    onComplete: TaskProps['onComplete']
}
