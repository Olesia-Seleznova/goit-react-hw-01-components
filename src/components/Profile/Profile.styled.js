import styled from 'styled-components';

export const ProfileInfo = styled.div`
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 4px;
`;

export const Description = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
  margin-top: 30px;
  width: 80px;
  background-color: gainsboro;
  border-radius: 50%;
  border: 1px solid #c5bdbd;
`;

export const Name = styled.p`
  margin-bottom: 10px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #4a4a4a;
`;

export const Tag = styled.p`
  margin: 0;
  text-align: center;
  color: #7d7474;
`;

export const Location = styled.p`
  text-align: center;
  color: #7d7474;
`;

export const StatsList = styled.ul`
  margin: 0px;
  padding: 0px;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gainsboro;
`;

export const StatsLi = styled.li`
  width: 100%;
  border: 1px solid #c5bdbd;
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const LabelText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b6363;
`;

export const Quantity = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;
