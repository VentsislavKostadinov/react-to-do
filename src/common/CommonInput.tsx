import { Form, InputGroup } from 'react-bootstrap'
import { InputProps } from '../model/InputProps.types'
import classes from '../style/CommonInput.module.scss'

export const CommonInput = ({
    type,
    label,
    value,
    checked,
    handleChange,
    placeholder,
    className,
    dataTestid,
    children,
}: InputProps) => {
    return (
        <>
            {type === 'checkbox' ? (
                <Form.Check
                    type="checkbox"
                    className="input-checkbox"
                    data-testid="input-checkbox"
                    checked={checked}
                    onChange={handleChange}
                />
            ) : (
                <InputGroup hasValidation className={classes.inputGroup}>
                    <Form.Label>{label}</Form.Label>
                    <Form.Control
                        required
                        checked={checked}
                        className={className}
                        data-testid={dataTestid}
                        type={type}
                        value={value}
                        placeholder={placeholder}
                        onChange={handleChange}
                    />
                    {children}
                </InputGroup>
            )}
        </>
    )
}
