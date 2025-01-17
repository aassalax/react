import Child from "./lessons/10-Comprendre-PropsChildren/Child.jsx";


function App() {
  return (
    <div className="main-content">
        <Child>
            <h1>Lorem ipsum dolor sit amet, consectetur.</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque eveniet ex nemo nisi suscipit! Ab aliquid autem beatae ea earum fuga, inventore necessitatibus, quam, qui quisquam recusandae sequi vero vitae! Ab asperiores atque dolore eius eligendi enim, eos facere incidunt, iste, laborum minima nesciunt nostrum nulla provident quasi ratione sed?</p>
        </Child>
        <Child txt={'test'}>
            {/*here txt is not a props children*/}
            <button>click me</button>
        </Child>
        <Child>
            <input type="text"/>
            <input type="text"/>
            <input type="text"/>
        </Child>
    </div>
  )
}

export default App
