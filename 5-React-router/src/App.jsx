import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
