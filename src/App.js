import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import User from "./pages/User";
import OldBooks from "./pages/OldBooks";
import NewBooks from "./pages/NewBooks";


function App() {
  return (
    <div>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">HOME</Link>
          </li>
          <li>
            <Link to="/about">ABOUT</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
          <li>
            <Link to="/user/1">USER 1</Link>
          </li>
          <li>
            <Link to="/user/2">USER 2</Link>
          </li>
          <li>
            <Link to="/books/newbooks">NEW BOOKS</Link>
          </li>
          <li>
            <Link to="/books/oldbooks">OLD BOOKS</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/books">
            <Route path="oldbooks" element={<OldBooks />} />
            <Route path="newbooks" element={<NewBooks />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 