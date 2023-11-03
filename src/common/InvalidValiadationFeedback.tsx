import { Form } from 'react-bootstrap'
import { InvalidValiadationFeedbackProps } from '../model/InvalidValiadationFeedbackProps'

export const InvalidValiadationFeedback = ({
    text,
}: InvalidValiadationFeedbackProps) => {
    return <Form.Control.Feedback type="invalid">{text}</Form.Control.Feedback>
}
