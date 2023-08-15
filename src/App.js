import { Container, Row, Col, Button } from "react-bootstrap";
import "./App.css";
import FormInput from "./components/FormInput";
import QAList from "./components/QAList";
import { question } from "./Data";
import { useState } from "react";
import React from "react";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const notify = (message,type) => {
    if(type === "Error")
    toast.error(message)
    else if (type === "Success")
    toast.success(message)
  };
  const [data, setData] = useState(question);
  const addItem = () => {
    localStorage.setItem("items", JSON.stringify([...question]));
    setData([...question]);
    notify("تمت الإضافة بنجاح","Success")
  };

  const deleteAllItems = () => {
    localStorage.removeItem("items");
    question.splice(0, question.length);
    setData([]);
    notify("تم حذف جميع الأسئلة","Success")
  };

  const deleteOneItem = (question) => {
    localStorage.setItem("items", JSON.stringify([...question]));
    setData([...question]);
    if (question.length <= 0) {
      deleteAllItems();
      notify("تم حذف السؤال ","Success")
    }
  };

  return (
    <div className="App">
      <Container className="p-5">
        <Row className="justify-content-center">
          <Col sm="4">
            <div className="fs-5">أسئلة وأجوبة شائعة</div>
          </Col>
          <Col sm="8">
            <FormInput onAdd={addItem} notify={notify}/>
            <QAList data={data} deleteOneItem={deleteOneItem} />
            {localStorage.getItem("items") != null ? (
              <Button onClick={deleteAllItems} variant="primary w-100">
                مسح الكل
              </Button>
            ) : null}
          </Col>
        </Row>
        <ToastContainer />
      </Container>
    </div>
  );
}

export default App;
