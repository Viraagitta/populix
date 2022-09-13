import { useEffect } from "react";
import Table from "react-bootstrap/Table";
import ModalForm from "../components/ModalForm";
import TableRow from "../components/TableRow";

function HomePage() {
  useEffect(() => {
    localStorage.getItem("questionsAnswer");
  }, []);
  const saved = JSON.parse(localStorage.getItem("questionsAnswer"));
  // console.log(saved[0]);
  return (
    <>
      <ModalForm />
      <Table striped>
        <thead>
          <tr>
            <th>TEST</th>
            <th>Questions</th>
            <th>Must Answer</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {saved
            ? saved.map((data, i) => {
                return <TableRow data={data} key={i} i={i} />;
              })
            : null}
        </tbody>
      </Table>
    </>
  );
}

export default HomePage;
