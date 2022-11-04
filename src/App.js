import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/signin" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
