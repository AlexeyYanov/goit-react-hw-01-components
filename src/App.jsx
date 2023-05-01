import { Profile } from 'components/Profile/Profile';
import userData from '../src/user.json/user.json';
// import { Statistics } from 'components/Statistics/Statistics';
// import { Statistics } from 'components/Statistics/Statistics';
// import stats from '../src/data.json/data.json';
import friends from '../src/friends.json/friends.json';
import { FriendList } from 'components/FriendList/FriendList';

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
      {/* <Statistics
        title={stats.title}
        key={stats.id}
        label={stats.label}
        percentage={stats.percentage}
      /> */}
      <FriendList friends={friends} />
    </div>

    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101',
    //   }}
    // >
    //   React homework template
    // </div>
  );
};
