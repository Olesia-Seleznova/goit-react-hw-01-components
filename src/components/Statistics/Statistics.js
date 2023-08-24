import PropTypes from 'prop-types';

import {
  StatisticsInfo,
  StatTitle,
  StatList,
  StatItem,
  LabelText,
  Percent,
} from './Statistics.styled';

export const Statistics = ({ stats, title }) => {
  return (
    <StatisticsInfo>
      {title && <StatTitle>{title}</StatTitle>}
      <StatList>
        {stats.map(item => (
          <StatItem key={item.id} className="item">
            <LabelText className="label">{item.label}</LabelText>
            <Percent className="percentage"> {item.percentage}%</Percent>
          </StatItem>
        ))}
      </StatList>
    </StatisticsInfo>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
