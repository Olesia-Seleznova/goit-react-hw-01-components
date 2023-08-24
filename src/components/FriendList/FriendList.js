import PropTypes from 'prop-types';

import { FriendListMarcup } from './FriendList.styled';

import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListMarcup>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          name={friend.name}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
        />
      ))}
    </FriendListMarcup>
  );
};

FriendList.prototype = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
