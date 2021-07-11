import user from "./data/user.json";
import statistics from "./data/statistical-data.json";
import friends from "./data/friends.json";
import transactions from "./data/transactions.json";

import UserProfile from "./components/UserProfile/UserProfile";
import Statistic from "./components/Statistics/Statistic";
import FriendsList from "./components/FriendsList/FriendsList";
import Transactions from "./components/TransactionHistory/TransactionHistory";

export default function App() {
  return (
    <div>
      <UserProfile
        avatar={user.avatar}
        name={user.name}
        tag={user.tag}
        location={user.location}
        stats={user.stats}
      />

      <Statistic title="Upload stats" stats={statistics} />

      <FriendsList friends={friends} />

      <Transactions items={transactions} />
    </div>
  );
}
