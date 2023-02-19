import { BrowserRouter, Route, Routes } from "react-router-dom";
import CreateEmployees from "./components/CreateEmployees";
import NavBar from "./components/NavBar";
import Employees from "./Employees";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <LoadingBar
          color="#39f50a"
          progress={progress}
          onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<Employees setProgress={setProgress} />}
          />
          <Route path="/create" element={<CreateEmployees />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
