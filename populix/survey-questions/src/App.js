import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePages";
function App() {
  return (
    <>
      <div className="container mt-3">
        <HomePage />
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes> */}
      </div>
    </>
  );
}

export default App;
