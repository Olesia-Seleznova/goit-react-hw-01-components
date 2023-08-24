import PropTypes from 'prop-types';

import {
  ProfileInfo,
  Description,
  Image,
  Name,
  Tag,
  Location,
  StatsList,
  StatsLi,
  LabelText,
  Quantity,
} from './Profile.styled';

export const Profile = ({ user }) => {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = user;

  return (
    <ProfileInfo>
      <Description>
        <Image src={avatar} alt="User avatar" className="avatar" />
        <Name>{username}</Name>

        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <StatsList>
        <StatsLi>
          <LabelText>Followers</LabelText>
          <Quantity>{followers}</Quantity>
        </StatsLi>
        <StatsLi>
          <LabelText>Views</LabelText>
          <Quantity>{views}</Quantity>
        </StatsLi>
        <StatsLi>
          <LabelText>Likes</LabelText>
          <Quantity>{likes}</Quantity>
        </StatsLi>
      </StatsList>
    </ProfileInfo>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }),
};
