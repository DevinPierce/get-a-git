import React, { Component } from 'react';

import UserInput from '../components/UserInput'
import UserInfoDisplay from '../components/UserInfoDisplay'

import GithubUsersAdapter from '../api/GithubUsersAdapter'

class GetUserContainer extends Component {

  state = {
    user: null
  }

  getUser = (userName) => {
    GithubUsersAdapter.getUser(userName)
    .then(userInfo => this.setState({
      user: userInfo
    }))
  }

  renderUserInfo = () => {
    const userInfo = this.state.user
    return (
      <React.Fragment>
        <UserInfoDisplay
          infoType='image'
          value={userInfo.avatar_url}
        />
        <UserInfoDisplay
          label='Login'
          infoType='text'
          value={userInfo.login}
        />
        <UserInfoDisplay
          label='Name'
          infoType='text'
          value={userInfo.name}
        />
        <UserInfoDisplay
          label='email'
          infoType='text'
          value={userInfo.email}
        />
        <UserInfoDisplay
          label='Bio'
          infoType='text'
          value={userInfo.bio}
        />
        <UserInfoDisplay
          label='Location'
          infoType='text'
          value={userInfo.location}
        />
        <UserInfoDisplay
          label='Blog'
          infoType='url'
          value={userInfo.blog}
        />
        <UserInfoDisplay
          label='Company'
          infoType='text'
          value={userInfo.company}
        />
        <UserInfoDisplay
          label='Repositories'
          infoType='text'
          value={userInfo.public_repos}
        />
        <UserInfoDisplay
          label='Profile'
          infoType='url'
          value={userInfo.html_url}
        />
      </React.Fragment>
    )
  }

  render(){
    return (
      <div className="container__get-user">
        <UserInput
          getUser={this.getUser}
        />
        <div className="user-info">
          {this.state.user ? this.renderUserInfo() : null}
        </div>
      </div>
    )
  }

}

export default GetUserContainer
