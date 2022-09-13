import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import ModalForm from "../components/ModalForm";
import TableRow from "../components/TableRow";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "bootstrap/dist/css/bootstrap.min.css";

function HomePage() {
  const saved = JSON.parse(localStorage.getItem("questionsAnswer"));
  const [survey = [], setSurvey] = useState(saved);
  // useEffect(() => {
  //   localStorage.getItem("questionsAnswer");
  // }, [survey]);
  // console.log(saved[0]);
  const handleDragEnd = (e) => {
    if (!e.destination) return;
    let tempData = Array.from(survey);
    let [source_data] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, source_data);
    setSurvey(tempData);
  };
  return (
    <>
      <div className="App mt-4">
        <ModalForm />
        <DragDropContext onDragEnd={handleDragEnd}>
          <Table hover variant="primary">
            <thead>
              <tr>
                <th>No.</th>
                <th>Questions</th>
                <th>Must Answer</th>
                <th>Respondent Options</th>
                <th>Action</th>
              </tr>
            </thead>
            <Droppable droppableId="droppable-1">
              {(provider) => (
                <tbody
                  className="text-capitalize"
                  ref={provider.innerRef}
                  {...provider.droppableProps}
                >
                  {survey
                    ? survey?.map((data, i) => {
                        return <TableRow data={data} key={i} i={i} />;
                      })
                    : null}
                  {provider.placeholder}
                </tbody>
              )}
            </Droppable>
          </Table>
        </DragDropContext>
      </div>
    </>
  );
}

export default HomePage;
