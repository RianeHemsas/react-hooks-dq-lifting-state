import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);
  const [userselected, setUserelected] = useState(users[0]);

  function handleUserClick (Id)  {
    const user = users.find(user => user.id === Id);
    setUserelected(user);
  };

  console.log("In TweetsContainer, state is", users);
  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
       
          <UserList users={users} handleUserClick={handleUserClick} />
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
     
          {/* <TweetList user={users[0]} /> */}
          <TweetList  user={userselected} />
         

        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
