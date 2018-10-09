import React, { Component } from 'react';
import { Window, TitleBar } from 'react-desktop/macOs';
import './App.css';
import Users from './components/Users';
import FriendsList from './components/FriendsList';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      friendList: []
    }
  }

  addFriendToList(friend){
    console.log('ADD TO FRIENDS', friend)
    let currentFriends = this.state.friendList;
    currentFriends.push(friend);
    this.setState({friendList: currentFriends})
  }


  render() {
    console.log("FRIEND LIST", this.state.friendList)
    return (
      <div className="App">
        <Window
          chrome
          height="100%"
          padding="10px"
        >
          <TitleBar title="untitled text 5" controls/>
          <Users
            addFriendToList={(user) => this.addFriendToList(user)}
          />
          <FriendsList friends={this.state.friendList}/>
        </Window>
      </div>
    );
  }
}

export default App;
