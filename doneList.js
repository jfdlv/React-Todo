function DoneList({doneItems, addTodo}) {
  return (
    <div className="todo-list">
      <ul className="list-group">
        {doneItems.map((item,i) => 
        <li className="list-group-item list-group-item-action" key={i} id={i} onClick={addTodo}>
          <i className="bi bi-caret-left-fill"/>
          <span className='done-item'>
          {item.text}
          </span>
        </li>)}
      </ul>
    </div>
  )
}