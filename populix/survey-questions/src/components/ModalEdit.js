import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function ModalEdit({ i }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const options = ["May Select", "Must Select"];

  const [formSurvey, setSurvey] = useState({});
  const [answerList, setAnswerList] = useState([]);

  const changeHandler = (e, i) => {
    const { value, name } = e.target;
    const [id, type] = name.split(":");

    setAnswerList((prev) => {
      return prev.map((el, i) => {
        if (i == id) {
          return { ...el, [type]: value };
        } else {
          return el;
        }
      });
    });
  };
  // console.log(answerList);
  const changeSurvey = (e) => {
    const { value, name } = e.target;
    setSurvey((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const saved = JSON.parse(localStorage.getItem("questionsAnswer"));
  useEffect(() => {
    setSurvey({
      questions: saved[i].questions,
    });
    const newAnswerList = saved[i].options;
    setAnswerList(newAnswerList);
  }, []);

  const handleSave = (e) => {
    const newAnswerList = [...answerList];
    e.preventDefault();
    if (formSurvey.questions !== "") {
      let data = JSON.parse(localStorage.getItem("questionsAnswer"));
      const removed = data.splice(i, 1);
      localStorage.setItem("questionsAnswer", JSON.stringify(data));
      const updateQuestions = JSON.parse(
        localStorage.getItem("questionsAnswer")
      );
      localStorage.setItem(
        "questionsAnswer",
        JSON.stringify([
          ...updateQuestions,
          { questions: formSurvey.questions, options: newAnswerList },
        ])
      );
      handleClose();
    } else {
      handleClose();
    }
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Edit Question
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Questions</Modal.Title>
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
                onChange={changeSurvey}
              />
            </Form.Group>
            {answerList?.map((el, i) => {
              // console.log(el, "<rule");
              return (
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlTextarea1"
                  key={i}
                >
                  <Form.Label>Answer Options</Form.Label>
                  <Form.Select
                    aria-label="Default select example"
                    name={`${i}:rules`}
                    value={el.rules}
                    onChange={changeHandler}
                  >
                    {options.map((opt, i) => {
                      return (
                        <option
                          key={i}
                          value={opt}
                          selected={el.rules === opt}
                          // diables={el.rules === opt}
                        >
                          {opt}
                        </option>
                      );
                    })}
                  </Form.Select>
                  <Form.Control
                    type="text"
                    placeholder="your answers"
                    // autoFocus
                    name={`${i}:answers`}
                    value={el.answers}
                    onChange={changeHandler}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
              );
            })}
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
