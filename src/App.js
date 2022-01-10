

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="todolist">
          <h1>Todos</h1>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="todo-item-check-1" />
                <label className="form-check-label" htmlFor="todo-item-check-1">Wash cloths</label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="todo-item-check-2" />
                <label className="form-check-label" htmlFor="todo-item-check-2">Buy Rice</label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="todo-item-check-3" />
                <label className="form-check-label" htmlFor="todo-item-check-3">Complete the book</label>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
