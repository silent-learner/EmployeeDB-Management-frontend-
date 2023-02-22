import { Route, Routes, useLocation } from "react-router-dom";
import CreateEmployees from "./components/CreateEmployees";
import NavBar from "./components/NavBar";
import Employees from "./Employees";
import LoadingBar from "react-top-loading-bar";
import { useState } from "react";
import Login from "./components/Login";

function App() {
  const location = useLocation();
  // console.log(location.pathname);
  const [progress, setProgress] = useState(0);
  const [isloggedin, setisloggedin] = useState(false);
  return (
    <>
      <LoadingBar
        color="#39f50a"
        progress={progress}
        height={3}
        onLoaderFinished={() => setProgress(0)}
      />
      <NavBar location={location.pathname} isloggedin={isloggedin} setisloggedin={setisloggedin} />
      <Routes>
        <Route
          exact
          path="/"
          element={<Employees setProgress={setProgress} isloggedin={isloggedin}/>}
        />
        <Route path="/create" element={<CreateEmployees isloggedin={isloggedin}/>} />
        <Route path="/login" element={<Login isloggedin={isloggedin} setisloggedin={setisloggedin}/>} />
      </Routes>
    </>
  );
}

export default App;
