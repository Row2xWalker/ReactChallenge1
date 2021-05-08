import React from "react";
import ReactDOM from "react-dom";
import ScotchInfoBar from "./ScotchInfoBar";
import "./styles.css";

/**
 * Our data
 * ------------------------
 */
const user = {
  name: "Chris on Code",
  location: "Las Vegas",
  foodType: "Everything",
  age: 28,
  likes: "Coding into the wee hours of the morning",
  twitterUsername: "chrisoncode",
  avatar:
    "https://scotch-res.cloudinary.com/image/upload/v1556479698/xRZsnhr0_400x400_cpyg2t.png"
};

/**
 * Our React component where we should display data
 * ------------------------
 */

const UserComp = (props) => {
  return (
    <div className="user-deets">
      <img src={props.avatar} alt={props.name} />
      <h3>
        <a href={props.url}>{props.name}</a>
      </h3>
      <p>
        <strong> Location </strong>
        {props.location}
      </p>
      <p>
        <strong>Eats</strong>
        {props.foodType}
      </p>
      <p>
        <strong>Age</strong>
        {props.age}
      </p>
      <p>
        <strong>Likes</strong>
        {props.likes}
      </p>
      <p>
        <strong>Twitter</strong>
        <a href={props.url}>@{props.twitterUserName}</a>
      </p>
    </div>
  );
};
function App() {
  const url = `https://twitter.com/${user.twitterUsername}`;
  return (
    <div className="App">
      {/* Show user data here */}
      <UserComp
        avatar={user.avatar}
        name={user.name}
        location={user.location}
        foodType={user.foodType}
        age={user.age}
        likes={user.likes}
        twitterUserName={user.twitterUsername}
        url={url}
      />
      <ScotchInfoBar />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
