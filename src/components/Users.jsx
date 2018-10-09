import React, { Component } from 'react'
import User from './User';
export default class Users extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch("https://gist.githubusercontent.com/Eth3rnit3/0a844206e99184a01d84e2f51ece7b3a/raw/0cf044b2546eb72a173e68ea99dbec152b1895a5/users.json")
    .then(response => response.json())
    .then(response => this.setState({users: response}))
    .catch(error => console.log(error))
  }
  render() {
    console.log("IN USERS.jsx", this.state)
    if(this.state.users.length > 0){
      return (
        <div>
          {
            this.state.users.map((userData, index) => {
              return <User key={userData.id} user={userData} addFriendToList={(user) => this.props.addFriendToList(user)}/>
            })
          }
        </div>
      )
    }
    return (
      <div>
        <h1>No users founds </h1>
      </div>
    )
  }
}
