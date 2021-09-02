function TodosList({todos, removeTodo}){
  return (
    <div className="todo-list">
      <ul className="list-group">
        {todos.map((todo,i) => 
        <li className="list-group-item list-group-item-action" key={i} id={i} onClick={removeTodo}>
          <span>
            {todo.text}
          </span>
          <i class="bi bi-caret-right-fill"/>
          </li>)}
      </ul>
    </div>
  )
}