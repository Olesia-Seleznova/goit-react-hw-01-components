import PropTypes from 'prop-types';

import {
  FriendListMarcup,
  FriendListItem,
  Status,
  FriendName,
} from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendListMarcup>
      {friends.map(friend => (
        <FriendListItem key={friend.id}>
          <Status>{friends.isOnline}</Status>
          <img
            className="avatar"
            src={friend.avatar}
            alt="User avatar"
            width="48"
          />
          <FriendName>{friend.name}</FriendName>
        </FriendListItem>
      ))}
    </FriendListMarcup>
  );
};

FriendList.prototype = {
  friends: PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.img,
    name: PropTypes.string.isRequired,
  }),
};
