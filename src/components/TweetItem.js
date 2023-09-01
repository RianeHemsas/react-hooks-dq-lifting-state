import React, { useState } from "react";

function TweetItem(props) {
  const [like,setLike]=useState(props.tweet.favorite_count);
  const [liked, setLiked] = useState(false);

  function handleLike(){
    // setLike((like)=>like+1);
    setLike((like) => (liked ? like - 1 : like + 1));
    setLiked(!liked);
  }
  // {`like icon ${liked ? "red" : ""}`
  return (
    <div className="event">
      <div className="label">
        <img alt="CoffeeDad" src={props.photo} />
      </div>
      <div className="content">
        <div className="summary">
          {props.handle}
          <div className="date">{props.tweet.created_at}</div>
        </div>
        <div className="extra text">{props.tweet.text}</div>
        <div className="meta">
          <button
            onClick={
              // () =>  console.log("%ca tweet was liked", "color: red")
          handleLike
            }
            className="ui tiny basic labeled icon like button"
          >
            <i className="like icon"></i>
             {like} Likes
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetItem;
