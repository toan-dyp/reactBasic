import React from "react";
import AddTodo from "./AddTodo";
import './ListTodo.scss';
import { toast } from 'react-toastify';

class ListTodo extends React.Component {

  state = {
    listTodo: [
      { id: "todo1", title: 'Doing homework' },
      { id: "todo2", title: 'Play game' },
      { id: "todo3", title: 'Sleep' }
    ],
    editTodo: {

    }
  }

  addNewTodo = (todo) => {
    this.setState({
      listTodo: [...this.state.listTodo, todo]
    })

    toast.success("Thêm thành công!")
  }

  handleDeleteTodo = (todo) => {
    let currentTodos = this.state.listTodo;
    currentTodos = currentTodos.filter(item => item.id !== todo.id)

    this.setState({
      listTodo: currentTodos
    })

    toast.success("Xóa Thành Công!")
  }

  handleEditTodo = (todo, isEmptyObj) => {
    let { listTodo, editTodo } = this.state;
    if (!isEmptyObj && editTodo.id === todo.id) {
      if (!editTodo.title) {
        toast.error('Không được bỏ trống!');
        return;
      }

      let listTodoCache = [...listTodo];

      let objIndex = listTodoCache.findIndex(item => item.id === todo.id);

      listTodoCache[objIndex].title = editTodo.title;

      this.setState({
        listTodo: listTodoCache,
        editTodo: {}
      })

      toast.success('Chỉnh sửa thành công!');
      return;
    }
    this.setState({
      editTodo: todo
    })
  }

  handleOnChangeEditTodo = (e) => {
    let editTodoCache = { ...this.state.editTodo };
    editTodoCache.title = e.target.value;
    this.setState({
      editTodo: editTodoCache
    })
  }

  render() {
    let { listTodo, editTodo } = this.state;

    let isEmptyObj = Object.keys(editTodo).length === 0;

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
                  {!isEmptyObj && item.id === editTodo.id ?
                    <>
                      <span>
                        {index + 1} -
                        <input
                          value={editTodo.title}
                          onChange={(e) => this.handleOnChangeEditTodo(e)}
                        />
                      </span>
                    </>
                    :
                    <>
                      <span> {index + 1} - {item.title} </span>
                    </>
                  }
                  <button
                    className="edit"
                    onClick={() => this.handleEditTodo(item, isEmptyObj)}
                  >
                    {!isEmptyObj && item.id === editTodo.id ? 'Save' : 'Edit'}
                  </button>
                  <button
                    className="delete"
                    onClick={() => this.handleDeleteTodo(item)}
                  >
                    Delete
                  </button>
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