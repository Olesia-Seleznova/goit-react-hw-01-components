import { FriendList } from './FriendList/FriendList';
import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

import userInfo from './Profile/user.json';
import statisticsInfo from './Statistics/data.json';
import friendsList from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile user={userInfo} />
      <Statistics title="Upload stats" stats={statisticsInfo} />
      <Statistics stats={statisticsInfo} />
      <FriendList friends={friendsList} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
