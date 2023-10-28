import React, { useState } from "react";
import "./Main.css";
import { BiArrowBack } from "react-icons/bi";
import { CgCalendarDates, CgMoreAlt } from "react-icons/cg";
import Tweet from "./Tweet";

const Main = () => {
  const [follow, setFollow] = useState(true);

  const FollowHandler = () => {
    if (follow === true) {
      setFollow(false);
    } else if (follow === false) {
      setFollow(true);
    }
  };

  return (
    <div id="Main">
      <div id="back-box-icon">
        <div id="box-user-name-back">
          <BiArrowBack id="back" />
          <div>
            <h1 id="matin">arujazzz</h1>
            <p id="Tweets">22 Tweets</p>
          </div>
        </div>
      </div>
      <div id="header">
        <div id="user-img-box">
          <img
            id="user-img-g"
            src="https://i.pinimg.com/originals/19/84/e4/1984e4a2849c17f153f84aaed221d633.jpg"
            alt="avatar"
          />
        </div>
      </div>

      <div id="follow-box">
        <CgMoreAlt id="more" />
        <input
          type="button"
          value={follow ? "Follow" : "Following"}
          onClick={FollowHandler}
          className={follow === false ? "Following" : "Follow"}
        />
      </div>

      <div id="user-box">
        <h1 id="name-user">arujazzz</h1>
        <p id="user-name-e">@arujazzz</p>
        <p>👨‍💻 QA-Engineer</p>
        <div id="dateBox">
          <CgCalendarDates />
          <p id="date">Joined October 2023</p>
        </div>
        <div id="following-followers">
          <span id="bold">35</span>
          <p id="following">Following</p>
          <span id="bold">{follow === false ? 6 : 5}</span>
          <p id="followers">Followers</p>
        </div>
      </div>

      <div id="TweetsBox">
        <div id="boxs">
          <button id="tweets">Posts</button>
          <div id="blue"></div>
        </div>
        <button id="btn">Replies</button>
        <button id="btn">Higlihts</button>
        <button id="btn">Likes</button>
      </div>

      <Tweet comment="51" like="120" tweet="😎 bla bla" />
      <Tweet comment="210" like="403" tweet="React js  bla bla" />
      <Tweet comment="105" like="220" tweet=" bla bla💻" />
      <Tweet comment="654" like="825" tweet=" bla bla" />
      <Tweet comment="453" like="504" tweet=" bla bla" />
    </div>
  );
};

export default Main;