import PropTypes from 'prop-types';

import { FriendItem, Status, FriendName } from './FriendList.styled';

export const FriendListItem = ({ isOnline, avatar, name }) => {
  return (
    <FriendItem>
      <Status>{isOnline}</Status>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
