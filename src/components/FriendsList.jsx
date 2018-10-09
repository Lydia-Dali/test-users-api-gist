import React, { Component } from 'react'

export default class FriendsList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      friends: props.friends
    }
  }
  render() {
    return (
      <ul>
        {
          this.state.friends.map((friend) => {
            return (
              <li>{friend.name}</li>
            )
          })
        }
      </ul>
    )
  }
}
