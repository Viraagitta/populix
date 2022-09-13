import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function ModalForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [isDisabled, setIsDisabled] = useState(false);

  const options = ["May Select", "Must Select"];

  const [formSurvey, setSurvey] = useState({
    questions: "",
  });

  const [answerList, setAnswerList] = useState([
    {
      rules: "May Select",
      answers: "",
    },
  ]);
  const changeHandler = (e, i) => {
    const { value, name } = e.target;

    const newSurvey = {
      questions: formSurvey.questions,
    };
    console.log(newSurvey);

    newSurvey[name] = value;
    setSurvey(newSurvey);
  };
  const handleInputChange = (e, i) => {
    const { value, name } = e.target;
    const newAnswerList = [...answerList];
    newAnswerList[i][name] = value;

    setAnswerList(newAnswerList);
  };

  const handleSave = (e) => {
    e.preventDefault();

    const newAnswerList = [...answerList];
    if (localStorage.getItem("questionsAnswer")) {
      const bulkQuestions = JSON.parse(localStorage.getItem("questionsAnswer"));
      localStorage.setItem(
        "questionsAnswer",
        JSON.stringify([
          ...bulkQuestions,
          {
            questions: formSurvey.questions,
            options: newAnswerList,
          },
        ])
      );
    } else {
      localStorage.setItem(
        "questionsAnswer",
        JSON.stringify([
          {
            questions: formSurvey.questions,
            options: newAnswerList,
          },
        ])
      );
    }
  };

  useEffect(() => {
    if (answerList.length > 0) {
      answerList[answerList.length - 1].answers === ""
        ? setIsDisabled(true)
        : setIsDisabled(false);
    }
  });

  const handleListAdd = () => {
    setAnswerList([
      ...answerList,
      {
        rules: "May Select",
        answers: "",
      },
    ]);
  };

  const handleRemoveItem = (i) => {
    const newList = [...answerList];
    newList.splice(i, 1);
    setAnswerList(newList);
  };

  console.log(answerList, "<list");
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
            {answerList.length > 0
              ? answerList.map((answers, i) => (
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Answer Options</Form.Label>
                    <Form.Select
                      aria-label="Default select example"
                      name="rules"
                      onChange={(e) => handleInputChange(e, i)}
                    >
                      {options.map((opt) => {
                        return (
                          <option
                            value={opt}
                            // onChange={(e) => handleInputChange(e, i)}
                          >
                            {opt}
                          </option>
                        );
                      })}
                    </Form.Select>
                    <Form.Control
                      type="text"
                      placeholder="your answers"
                      autoFocus
                      name="answers"
                      onChange={(e) => handleInputChange(e, i)}
                      as="textarea"
                      rows={3}
                    />
                  </Form.Group>
                ))
              : null}
            <Button variant="primary" onClick={handleListAdd}>
              Add Answer
            </Button>
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
