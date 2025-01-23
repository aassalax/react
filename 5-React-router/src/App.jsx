import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact.jsx";
import UserProfile from "./components/UserProfile.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/profile/:id" element={<UserProfile />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App