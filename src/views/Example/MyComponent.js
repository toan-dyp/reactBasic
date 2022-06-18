import React from "react";

class MyComponent extends React.Component {

  state = {
    firstName: '',
    lastName: ''
  }

  handleChangeFirstName = (e) => {
    this.setState({
      firstName: e.target.value
    })
  }

  handleChangeLastName = (e) => {
    this.setState({
      lastName: e.target.value
    })
  }

  handleSubmit = () => {
    console.log(this.state);
  }

  render() {
    return (
      <>
        <form>
          <label htmlFor="fname">First name:</label><br />
          <input
            type="text"
            value={this.state.firstName}
            onChange={(e) => this.handleChangeFirstName(e)}
          />
          <br />
          <label htmlFor="lname">Last name:</label><br />
          <input
            type="text"
            value={this.state.lastName}
            onChange={(e) => this.handleChangeLastName(e)}
          />
          <br />
          <input type="button" value="Submit"

            onClick={() => this.handleSubmit()}
          />
        </form>
      </>
    )
  }
}

export default MyComponent;