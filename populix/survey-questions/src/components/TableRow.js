import Button from "react-bootstrap/Button";
import ModalEdit from "./ModalEdit";
import { Draggable } from "react-beautiful-dnd";

export default function TableRow({ data, i }) {
  const handleDelete = (e, i) => {
    e.preventDefault();
    let data = JSON.parse(localStorage.getItem("questionsAnswer"));
    const removed = data.splice(i, 1);
    localStorage.setItem("questionsAnswer", JSON.stringify(data));
  };
  let must = data.options?.filter((opt) => opt.rules === "Must Select");
  // console.log(must[0], "?");

  return (
    <Draggable key={data.questions} draggableId={data.questions} index={i}>
      {(provider) => (
        <tr
          {...provider.draggableProps}
          ref={provider.innerRef}
          {...provider.dragHandleProps}
        >
          <td>{i + 1}</td>
          <td>{data.questions}</td>
          {must[0] ? <td>{must[0].answers}</td> : <td>{""}</td>}
          <td>
            {data.options.map((opt, i) => {
              return (
                <div key={i}>
                  {i + 1}. {opt.answers}
                </div>
              );
            })}
          </td>
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
      )}
    </Draggable>
  );
}
