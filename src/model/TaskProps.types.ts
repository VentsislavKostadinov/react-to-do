export interface TaskProps {
    task: {
        id: number
        description: string
        completed: boolean
    }
    onEdit: (id: number, editedTask: string) => void
    onDelete: (id: number) => void
    onComplete: (id: number) => void
}
