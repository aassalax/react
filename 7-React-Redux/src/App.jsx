import Counter from "./pages/Counter/Counter";
import Fruity from "./pages/Fruity/Fruity";
import Users from "./pages/Users/Users";
import Chrono from "./pages/Chrono/Chrono";

function App() {

  return (
    <div className="min-h-screen bg-slate-700 px-4">
        <div className="mx-auto max-w-3xl pt-10 pb-20">
            {/*1- Counter app*/}
            {/*<Counter/>*/}
            {/*Fruity app*/}
            {/*<Fruity/>*/}
            {/*Users app*/}
            {/*<Users/>*/}
            {/*Chrono app*/}
            <Chrono/>
        </div>
    </div>
  )
}

export default App
