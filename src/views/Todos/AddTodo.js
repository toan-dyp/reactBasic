import React from "react";
import { toast } from 'react-toastify';


class AddTodo extends React.Component {
  state = {
    title: ''
  }

  handleChangeTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  handleAddTodo = () => {
    if (!this.state.title) {
      toast.error("Vui lòng không để trống!")
      return
    }
    let todo = {
      id: Math.floor(Math.random * 100001),
      title: this.state.title
    }
    this.props.addNewTodo(todo);
    this.setState({
      title: ''
    })

  }

  render() {
    let { title } = this.state;
    return (
      <div className="add-todo">
        <input
          type="text"
          value={title}
          onChange={(e) => this.handleChangeTitle(e)}
        />
        <button
          type="button"
          className="add"
          onClick={() => this.handleAddTodo()}
        >
          Add
        </button>
      </div>
    )
  }
}

export default AddTodo