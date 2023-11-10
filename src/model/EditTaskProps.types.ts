import { BaseProps } from "./BaseProps.types";
import { TaskProps } from "./TaskProps.types";

export interface EditTaskProps extends BaseProps {

    task: TaskProps['task']
    handleSave: React.FormEventHandler<HTMLFormElement>
    saveEditedTask: React.ChangeEventHandler<HTMLInputElement>
    isEditing?: boolean
    validated: boolean
    editedTask: string
}