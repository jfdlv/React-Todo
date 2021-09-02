function App() {
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }     
  ])

  const [doneItems, setDoneItems] = React.useState([]);

  const addTodo = value => {
    const newTodos = [...todos, {text: value, isCompleted: false}]
    setTodos(newTodos);
  }

  const removeTodo = e => {
    const id = Number(e.target.id);
    let newTodos = [...todos];
    setDoneItems([...doneItems, newTodos[id]])
    newTodos.splice(id,1)
    setTodos(newTodos);
  }

  const reAddTodo = e => {
    const id = Number(e.target.id);
    let newDoneItems = [...doneItems];
    setTodos([...todos, newDoneItems[id]])
    newDoneItems.splice(id,1)
    setDoneItems(newDoneItems);
  }

  return (
    <div className="app">
      <div className="row">
        <div className="col">
          <h3>Todo List</h3>
          <TodosList todos={todos} removeTodo={removeTodo}/>
          <TodoForm addTodo={addTodo}/>
        </div>
        <div className="col">
          <h3>Done List</h3>
          <DoneList doneItems={doneItems} addTodo={reAddTodo}/>
        </div>
      </div>
    </div>);
};

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);