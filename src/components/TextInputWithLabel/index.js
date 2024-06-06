import React from "react";
import { Form } from "react-bootstrap";
function TextInputWithLabel({ label, name, value, type, onChange, placeholder }) {
  return (
    <Form.Group>
      <Form.Label>{label}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        ></Form.Control>
    </Form.Group>
  );
}

export default TextInputWithLabel;
