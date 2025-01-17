import StaticRefSelection from "./lessons/9-Selectionner-un-tableau-d-elements/StaticRefSelection.jsx"
import DynamicRefSelection from "./lessons/9-Selectionner-un-tableau-d-elements/DynamicRefSelection.jsx";


function App() {
  return (
    <div className="main-content">
        {false && <StaticRefSelection/>}
        <DynamicRefSelection />
    </div>
  )
}

export default App
