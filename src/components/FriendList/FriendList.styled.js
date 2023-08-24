import styled from 'styled-components';

export const FriendListMarcup = styled.ul`
  margin-left: 15px;
  list-style: none;
  width: 250px;
`;

export const FriendItem = styled.li`
  margin: 8px 0;
  display: flex;
  align-items: center;
  box-shadow: 1px 1px 3px #7d7474;
  border: 1px solid #c5bdbd;
`;
const statusColor = props => {
  switch (props.isOnline) {
    case false:
      return 'red';
    case true:
      return 'green';
    default:
      return null;
  }
};

export const Status = styled.span`
  margin-left: 10px;
  margin-right: 10px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${statusColor};
`;

export const FriendName = styled.p`
  margin-left: 10px;
`;
