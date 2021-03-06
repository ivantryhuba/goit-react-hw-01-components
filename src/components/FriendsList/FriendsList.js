import React from "react";
import PropTypes from "prop-types";

import FriendItem from "./FriendItem";
import styles from "./FriendsList.module.css";

export default function FriendsList({ friends }) {
  return (
    <ul className={styles.FriendsList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
