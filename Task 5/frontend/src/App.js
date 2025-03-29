import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./page/Home";
import Login from "./page/Login";
import Signup from "./page/Signup";
import Todo from "./page/Todo";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/todo" element={<Todo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
