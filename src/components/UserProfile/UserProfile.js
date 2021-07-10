import PropTypes from "prop-types";
import defaultAvatar from "./avatar.jpg";

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
    <div>
      <div>
        <img src={avatar} alt={name} />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul>
        <li>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{likes}</span>
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
