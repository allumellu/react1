import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <div className="App">
       <Router>
      <Header className="App-header"></Header>

      <Content />
      <Footer />
      </Router>
    </div>
  );
}

export default App;
