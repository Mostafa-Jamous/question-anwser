import React from "react";
import { Accordion, Button, Row } from "react-bootstrap";
import { question } from "../Data";

const QAList = ({ data, deleteOneItem }) => {

  const dataLocal= JSON.parse(localStorage.getItem('items'))
  const onDeleteItem = (id) => {
    if(localStorage.getItem('items') != null){
        const index = question.findIndex((item) => item.id===id)
        question.splice(index,1)
        deleteOneItem(question)
    }
  };

  return (
    <Row className="my-3">
      <Accordion>
        {localStorage.getItem('items') != null ? (
          dataLocal.map((item, index) => {
            return (
              <Accordion.Item key={index} eventKey={item.id}>
                <Accordion.Header>
                  <div className="m-auto">{item.q}</div>
                </Accordion.Header>
                <Accordion.Body>
                  <div className="d-inline">{item.a}</div>
                  <Button
                    onClick={() => {
                      onDeleteItem(item.id);
                    }}
                    className="mx-2"
                    variant="primary"
                  >
                    مسح
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
            );
          })
        ) : (
          <h2 className="fs-4">لا يوجد أسئلة</h2>
        )}
      </Accordion>
    </Row>
  );
};

export default QAList;
