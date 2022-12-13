import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div className="App">
      <Profile />
      <Statistics statistics={statistics} title="Upload stats" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
