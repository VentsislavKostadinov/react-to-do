import { Form } from 'react-bootstrap'
import { CommonInvalidValiadationFeedbackProps } from '../model/CommonInvalidValiadationFeedbackProps.types'

export const CommonInvalidValiadationFeedback = ({
    text,
    dataTestid,
}: CommonInvalidValiadationFeedbackProps) => {
    return (
        <Form.Control.Feedback data-testid={dataTestid} type="invalid">
            {text}
        </Form.Control.Feedback>
    )
}
