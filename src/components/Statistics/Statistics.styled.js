import styled from 'styled-components';

export const StatisticsInfo = styled.section`
  margin-left: 15px;
  margin-right: 15px;
`;

export const StatTitle = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  text-transform: uppercase;
  color: #4a4a4a;
`;

export const StatList = styled.ul`
  margin: 0px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
`;

export const StatItem = styled.li`
  width: 100%;
  padding: 10px;
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #7d7474;
`;

export const LabelText = styled.span`
  padding-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  color: black;
`;

export const Percent = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: 600;
  color: #6b6363;
`;
