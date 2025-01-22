import ModalButton from "./lessons/1-Les-Modals/ModalButton";
import Tabs from "./lessons/2-Les-Tabs/Tabs.jsx";
import Navbar from "./lessons/3-La-navbar/Navbar.jsx";
import Validation from "./lessons/4-Inputs-validation/Validation.jsx";

function App() {
  return (
    <div className="min-h-screen bg-slate-700 pt-20">
        <Navbar />
        <ModalButton/>
        <Tabs/>
        <Validation/>
    </div>
  )
}

export default App
