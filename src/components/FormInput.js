import React, { useState } from "react";
import { Row, Form, Button, Col } from "react-bootstrap";
import { question } from "../Data";
const FormInput = ({ onAdd ,notify }) => {
  const [qu, setQu] = useState("");
  const [an, setAn] = useState("");

  const addNewItem = () => {
    if (qu === "" || an === "") {
      notify("أكمل إدخال البيانات من فضلك","Error")
      return;
    }
    question.push({ id: Math.random(), q: qu, a: an });
    setQu("");
    setAn("");
    onAdd();
  };

  return (
    <Row>
      <Col sm="5">
        <Form.Control
          value={qu}
          onChange={(e) => {
            setQu(e.target.value);
          }}
          type="email"
          placeholder="أدخل السؤال"
        />
      </Col>
      <Col sm="5">
        <Form.Control
          value={an}
          onChange={(e) => {
            setAn(e.target.value);
          }}
          type="email"
          placeholder="أدخل الإجابة"
        />
      </Col>
      <Col sm="2">
        <Button
          onClick={addNewItem}
          className="w-100"
          variant="primary"
          type="submit"
        >
          إضافة
        </Button>
      </Col>
    </Row>
  );
};

export default FormInput;
