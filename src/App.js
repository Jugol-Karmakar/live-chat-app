import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signup" element={<Register />}></Route>
        <Route path="/signin" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
