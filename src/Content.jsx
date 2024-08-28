import Home from "./pages/Home";
import About from "./pages/About";
import Createaccount from "./pages/Create_account";
import Signinaccount from "./pages/Signin_account";
import "./Content.css";
import { BrowserRouter as Routes, Route } from "react-router-dom";

function Content() {
  return (
    <div className="Content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Createaccount" element={<Createaccount />} />
        <Route path="/Signinaccount" element={<Signinaccount />} />
        <Route path="/About" element={<About />} />
      </Routes>
    </div>
  );
}
export default Content;
