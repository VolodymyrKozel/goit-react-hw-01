import { FriendListItem } from './friendListItem/FriendListItem';
import css from './FriendList.module.css';
export const FriendList = ({ friends }) => {
  return (
    <ul className={css['friends-list']}>
      {friends.map(friend => (
        <li className={css['friends-item']} key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
  );
};
