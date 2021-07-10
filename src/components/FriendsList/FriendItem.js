import React from "react";
import PropTypes from "prop-types";

export default function FriendItem({ avatar, name, isOnline }) {
  return (
    <li>
      <span>{isOnline}</span>
      <img src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
