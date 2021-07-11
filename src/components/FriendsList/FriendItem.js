import React from "react";
import PropTypes from "prop-types";
import styles from "./FriendItem.module.css";

export default function FriendItem({ avatar, name, isOnline }) {
  const status = (state) => (state ? styles.IsOnline : styles.IsOffline);
  return (
    <li className={styles.Item}>
      <span className={status(isOnline)}>{isOnline}</span>
      <img className={styles.Avatar} src={avatar} alt={name} width="48" />
      <p>{name}</p>
    </li>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
