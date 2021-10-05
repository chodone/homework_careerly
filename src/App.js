import logo from "./logo.svg";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Board from "./pages/Board";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Board} />
    </BrowserRouter>
  );
}

export default App;
