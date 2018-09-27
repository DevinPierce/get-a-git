import React, { Component } from 'react';

class UserInput extends Component {

  state = {
    userName: ''
  }

  handleChange = (event) => {
    this.setState({
      userName: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.getUser(this.state.userName)
    this.setState({
      userName: ''
    })
  }

  render() {
    return (
      <div className="form__user-input">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.userName}
            onChange={(event) => this.handleChange(event)}
            onSubmit={(event) => this.handleSubmit(event)}
            placeholder="Enter Github Username"
          />
        </form>
      </div>
    )
  }

}

export default UserInput
