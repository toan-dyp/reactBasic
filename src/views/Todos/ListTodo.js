import React from "react";
import AddTodo from "./AddTodo";
import './ListTodo.scss';

class ListTodo extends React.Component {

  state = {
    listTodo: [
      { id: "todo1", title: 'Doing homework' },
      { id: "todo2", title: 'Play game' },
      { id: "todo3", title: 'Sleep' }
    ]
  }

  addNewTodo = (todo) => {
    this.setState({
      listTodo: [...this.state.listTodo, todo]
    })
  }

  render() {
    let { listTodo } = this.state;
    return (
      <div className="list-todo-container">
        <AddTodo
          addNewTodo={this.addNewTodo}
        />
        <div className="list-todo-content">
          {listTodo && listTodo.length > 0 &&
            listTodo.map((item, index) => {
              return (
                <div className="todo-child" key={item.id}>
                  <span> {index + 1} - {item.title} </span>
                  <button className="edit">Edit</button>
                  <button className="delete">Delete</button>
                </div>
              )
            })

          }

        </div>
      </div>
    )
  }
}

export default ListTodo;