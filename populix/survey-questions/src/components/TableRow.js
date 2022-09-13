import Button from "react-bootstrap/Button";
import ModalEdit from "./ModalEdit";

export default function TableRow({ data, i }) {
  const handleDelete = (e, i) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("questionsAnswer"));
    const removed = data.splice(i, 1);
    localStorage.setItem("questionsAnswer", JSON.stringify(data));
  };
  let must = data.options.filter((opt) => opt.rules === "Must Select");
  // console.log(must, "?");
  return (
    <>
      <tr>
        <td>{i + 1}</td>
        <td>{data.questions}</td>
        <td>{must[0].answers}</td>
        {data.options.map((opt, i) => {
          return (
            <>
              <div>
                {i + 1}. {opt.answers}
              </div>
            </>
          );
        })}
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
