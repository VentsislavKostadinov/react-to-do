import { Form } from 'react-bootstrap'
import { InvalidValiadationFeedback } from '../model/InvalidValiadationFeedbackProps.types'

export const CommonInvalidValiadationFeedback = ({
    text,
}: InvalidValiadationFeedback) => {
    return <Form.Control.Feedback type="invalid">{text}</Form.Control.Feedback>
}
