import Button from "react-bootstrap/Button";
import ModalEdit from "./ModalEdit";

export default function TableRow({ data, i }) {
  const handleDelete = (e, i) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("questionsAnswer"));
    const removed = data.splice(i, 1);
    localStorage.setItem("questionsAnswer", JSON.stringify(data));
  };
  return (
    <>
      <tr>
        <td>{i + 1}</td>
        <td>{data.questions}</td>
        <td>{data.answers}</td>
        <td>
          <ModalEdit i={i} />
          <Button
            onClick={(e) => handleDelete(e, i)}
            style={{ marginLeft: 30 }}
          >
            Delete Question
          </Button>
        </td>
      </tr>
    </>
  );
}
