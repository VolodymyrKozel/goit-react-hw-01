import clsx from 'clsx';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ friend }) => {
  return (
    <div className={css['item']}>
      <img
        className={css['avatar']}
        src={friend.avatar}
        alt={friend.name}
        width="48"
      />
      <p className={css['name']}>{friend.name}</p>
      <p
        className={clsx(
          friend.isOnline && css['online'],
          !friend.isOnline && css['offline']
        )}>
        {friend.isOnline ? 'online' : 'offline'}
      </p>
    </div>
  );
};
