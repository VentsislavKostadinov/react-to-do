import { Form, InputGroup } from 'react-bootstrap'
import { InputProps } from '../model/InputProps'
import './AppInput.scss'

export const AppInput = ({
    type,
    label,
    value,
    handleChange,
    placeholder,
    className,
    dataTestid,
    children,
}: InputProps) => {
    return (
        <InputGroup hasValidation>
            <Form.Label>{label}</Form.Label>
            <Form.Control
                required
                className={className}
                data-testid={dataTestid}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
            />
            {children}
        </InputGroup>
    )
}
