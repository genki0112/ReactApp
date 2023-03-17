import { BrowserRouter, Link } from "react-router-dom";
import { Router } from "./router/Router";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        aaaaaaaa
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
      <h1>コミット１回目</h1>
    </BrowserRouter>
  );
}
