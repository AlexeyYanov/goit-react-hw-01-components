import { Profile } from 'components/Profile/Profile';
import userData from '../src/user.json/user.json';
import { Statistics } from 'components/Statistics/Statistics';
import data from '../src/data.json/data.json';

import friends from '../src/friends.json/friends.json';
import { FriendList } from 'components/FriendList/FriendList';
import transactions from '../src/transactions.json/transactions.json';
import { TransactionHistory } from 'components/Transactions/TransactionHistory';

export const App = () => {
  return (
    <div>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <Statistics title="upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory data={transactions} />
    </div>
  );
};
