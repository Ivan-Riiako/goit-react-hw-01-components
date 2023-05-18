import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import PropTypes from 'prop-types';
import styles from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={styles.list}>
      {friends.map(({avatar, name , isOnline,id}) => (
          <FriendListItem
            avatar={avatar}
            name={name}
            isOnline={isOnline}
            key={id}
          />
       
      ))}
    </ul>
  );
};


FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};