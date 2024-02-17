import './App.css';
import userData from '../userData.json';
import friends from '../friends.json';
import transactions from '../transactions.json';
import { Profile } from './profile/Profile';
import { FriendList } from './friendlist/FriendList';
import { TransactionHistory } from './transactionhistory/TransactionHistory';

function App() {
  return (
    <section className="container">
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </section>
  );
}

export default App;
