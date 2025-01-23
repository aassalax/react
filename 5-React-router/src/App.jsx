import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import UserProfile from "./components/UserProfile";
import NotFound from "./components/NotFound";
import Navbar from "./components/Navbar";
import Analytics from "./pages/Analytics/Analytics.jsx";
import Development from "./pages/Analytics/Development.jsx";
import CyberSecurity from "./pages/Analytics/CyberSecurity.jsx";
import UIUX from "./pages/Analytics/UIUX.jsx";

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/profile/:id" element={<UserProfile />}/>
          <Route path="/analytics" element={<Analytics />} >
            <Route path="/analytics/development" element={<Development />}/>
            <Route path="/analytics/cybersecurity" element={<CyberSecurity />}/>
            <Route path="/analytics/uiux" element={<UIUX />}/>
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
