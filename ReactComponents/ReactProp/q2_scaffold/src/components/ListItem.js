import React, { Component } from "react";

// Complete this Component
const ListItem = (props) => {
  console.log(props);

  return (
    <div
      className="ListItem"
      style={{
        height: 30, backgroundColor: props.item.bgColor
      }}
      key={props.item.id}
    >
      <img src={props.item.icon} alt={props.item.name} />
      <a href={props.item.link}>{props.item.name}</a>
    </div>
  );
};

export default ListItem;
// {
//   id: 3,
//   name: "Twitter",
//   link: "https://twitter.com/",
//   icon: "https://cdn-icons-png.flaticon.com/128/733/733579.png",
//   bgColor: "#b8b3e8"
// }