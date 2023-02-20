import { Route, Routes, useLocation } from "react-router-dom";
import CreateEmployees from "./components/CreateEmployees";
import NavBar from "./components/NavBar";
import Employees from "./Employees";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";

function App() {
  const location = useLocation();
  // console.log(location.pathname);
  const [progress, setProgress] = useState(0);
  return (
    <>
      <LoadingBar
        color="#39f50a"
        progress={progress}
        height={3}
        onLoaderFinished={() => setProgress(0)}
      />
      <NavBar location={location.pathname} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Employees setProgress={setProgress} />}
        />
        <Route path="/create" element={<CreateEmployees />} />
      </Routes>
    </>
  );
}

export default App;
