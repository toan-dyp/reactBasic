import React from "react";
import Color from "../HOC/Color";
import { connect } from "react-redux";
import { withRouter } from "react-router";

class Home extends React.Component {

  handleAddUser = () => {
    this.props.addUserRedux();
  }

  handleDeleteUser = (user) => {
    this.props.deleteUserRedux(user);
  }

  render() {
    let listUsers = this.props.dataRedux;
    return (
      <>
        <div>
          Hello Everyone
        </div>
        <div>
          {listUsers && listUsers.length > 0 &&

            listUsers.map((item, index) => {
              return (
                <div key={item.id}
                >
                  {index + 1} - {item.name} <span onClick={() => this.handleDeleteUser(item)}>x</span>
                </div>
              )
            })
          }
          <button type="button" onClick={() => this.handleAddUser()}>Add New</button>
        </div>
      </>
    )
  }
}

// export default withRouter(Home);

const mapStatetoProps = (state) => {
  return {
    dataRedux: state.users
  }
}

const mapDispatchToProps = (dispath) => {
  return {
    addUserRedux: (userAdd) => dispath({ type: 'CREATE_USER' }),
    deleteUserRedux: (userDelete) => dispath({ type: 'DELETE_USER', payload: userDelete })
  }
}

export default connect(mapStatetoProps, mapDispatchToProps)(Color(Home));