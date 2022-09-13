import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function ModalEdit({ i }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const options = [
    { id: 1, name: "May Select" },
    { id: 2, name: "Must Select" },
  ];

  const [formSurvey, setSurvey] = useState({});

  const changeHandler = (e) => {
    const { value, name } = e.target;

    setSurvey((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const saved = JSON.parse(localStorage.getItem("questionsAnswer"));
  useEffect(() => {
    // saved[i];
    setSurvey({
      questions: saved[i].questions,
      answers: saved[i].answers,
    });
  }, []);

  const handleSave = (e) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("questionsAnswer"));
    const removed = data.splice(i, 1);
    localStorage.setItem("questionsAnswer", JSON.stringify(data));
    const updateQuestions = JSON.parse(localStorage.getItem("questionsAnswer"));
    localStorage.setItem(
      "questionsAnswer",
      JSON.stringify([
        ...updateQuestions,
        { questions: formSurvey.questions, answers: formSurvey.answers },
      ])
    );
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Question
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
                value={formSurvey.questions}
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
              <Form.Label>Example Answer 1</Form.Label>
              <Form.Select
                aria-label="Default select example"
                name="options"
                value={formSurvey.answers}
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
                // autoFocus
                name="answers"
                value={formSurvey.answers}
                onChange={changeHandler}
                as="textarea"
                rows={3}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example Answer 2</Form.Label>
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
              <Form.Label>Example Answer 3</Form.Label>
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
              <Form.Label>Example Answer 4</Form.Label>
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
