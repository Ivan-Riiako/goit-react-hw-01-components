import user from '../../assets/user.json';
import { Profile } from '../Profile/Profile';
import data from '../../assets/data.json';
import { Statistics } from '../Statistics/Statistics'
import friends from '../../assets/friends.json';
import { FriendList } from '../FriendList/FriendList';
import transactions from '../../assets/transactions.json';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
