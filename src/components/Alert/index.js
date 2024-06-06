import { Alert } from "react-bootstrap";


function SAlert ({message}) {
  return (
    <Alert variant="danger">
      {message}
    </Alert>
  )
}

export default SAlert;