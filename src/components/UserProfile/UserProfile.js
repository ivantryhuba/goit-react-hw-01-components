import PropTypes from "prop-types";
import defaultAvatar from "./avatar.jpg";

import styles from "./UserProfile.module.css";

export default function UserProfile(props) {
  const {
    avatar = defaultAvatar,
    name,
    tag,
    location,
    followers,
    views,
    likes,
  } = props;

  return (
    <div className={styles.UserProfile}>
      <div className={styles.Description}>
        <img className={styles.Avatar} src={avatar} alt={name} />
        <p className={styles.Name}>{name}</p>
        <p className={styles.Tag}>@{tag}</p>
        <p className={styles.Location}>{location}</p>
      </div>

      <ul className={styles.Stats}>
        <li>
          <span className={styles.Label}>Followers</span>
          <span className={styles.Quantity}>{followers}</span>
        </li>
        <li>
          <span className={styles.Label}>Views</span>
          <span className={styles.Quantity}>{views}</span>
        </li>
        <li>
          <span className={styles.Label}>Likes</span>
          <span className={styles.Quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

UserProfile.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
};
