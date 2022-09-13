import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function ModalForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const options = [
    { id: 1, name: "May Select" },
    { id: 2, name: "Must Select" },
  ];

  const [formSurvey, setSurvey] = useState({
    questions: "",
    answers: "",
  });

  const changeHandler = (e) => {
    const { value, name } = e.target;

    const newSurvey = {
      questions: formSurvey.questions,
      answers: formSurvey.answers,
    };
    console.log(newSurvey);

    newSurvey[name] = value;
    setSurvey(newSurvey);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (localStorage.getItem("questionsAnswer")) {
      const bulkQuestions = JSON.parse(localStorage.getItem("questionsAnswer"));
      localStorage.setItem(
        "questionsAnswer",
        JSON.stringify([
          ...bulkQuestions,
          { questions: formSurvey.questions, answers: [formSurvey.answers] },
        ])
      );
    } else {
      localStorage.setItem(
        "questionsAnswer",
        JSON.stringify([
          { questions: formSurvey.questions, answers: [formSurvey.answers] },
        ])
      );
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        CREATE QUESTIONS
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Questions</Form.Label>
              <Form.Control
                type="text"
                placeholder="your questions"
                autoFocus
                name="questions"
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Answer 1</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="options"
                onChange={changeHandler}
              >
                {options.map((opt, i) => {
                  return (
                    <option key={i} value={opt.id} onChange={changeHandler}>
                      {opt.name}
                    </option>
                  );
                })}
              </Form.Select>
              <Form.Control
                type="text"
                placeholder="your answers"
                autoFocus
                name="answers"
                onChange={changeHandler}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Answer 2</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="options"
                onChange={changeHandler}
              >
                {options.map((opt, i) => {
                  return (
                    <option key={i} value={opt.id} onChange={changeHandler}>
                      {opt.name}
                    </option>
                  );
                })}
              </Form.Select>
              <Form.Control
                type="text"
                placeholder="your answers"
                autoFocus
                name="answers"
                onChange={changeHandler}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Answer 3</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="options"
                onChange={changeHandler}
              >
                {options.map((opt, i) => {
                  return (
                    <option key={i} value={opt.id} onChange={changeHandler}>
                      {opt.name}
                    </option>
                  );
                })}
              </Form.Select>
              <Form.Control
                type="text"
                placeholder="your answers"
                autoFocus
                name="answers"
                onChange={changeHandler}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Answer 4</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="options"
                onChange={changeHandler}
              >
                {options.map((opt, i) => {
                  return (
                    <option key={i} value={opt.id} onChange={changeHandler}>
                      {opt.name}
                    </option>
                  );
                })}
              </Form.Select>
              <Form.Control
                type="text"
                placeholder="your answers"
                autoFocus
                name="answers"
                onChange={changeHandler}
                as="textarea"
                rows={3}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
