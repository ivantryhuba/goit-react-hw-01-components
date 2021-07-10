import user from "./data/user.json";
import statistics from "./data/statistics.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

import UserProfile from "./components/UserProfile/UserProfile";

export default function App() {
  return (
    <div>
      <UserProfile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    </div>
  );
}
