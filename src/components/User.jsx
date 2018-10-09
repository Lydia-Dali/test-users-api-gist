import React, { Component } from 'react'
import { Dialog, Button } from 'react-desktop/macOs';

class User extends Component {
  
  render() {
    const {user} = this.props;
    return (
      <div>
        <Dialog
        title={user.name}
        message={user.username}
        icon={this.renderIcon(user.picture)}
      />
      <Button
        onClick={() => this.props.addFriendToList(user)}
      >Add me to friend list !!!</Button>
      </div>
    );
  }

  renderIcon(image) {
    return (
      <img
        src={image}
        width="52"
        height="52"
        alt="hdjf"
      />
    );
  }
}

export default  User