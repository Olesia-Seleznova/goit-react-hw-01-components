import PropTypes from 'prop-types';

import {
  TransactionTable,
  TableHeader,
  ThTable,
  TableRow,
  TableRowItem,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <thead>
        <TableHeader>
          <ThTable>Type</ThTable>
          <ThTable>Amount</ThTable>
          <ThTable>Currency</ThTable>
        </TableHeader>
      </thead>

      <tbody>
        {items.map(item => (
          <TableRow key={item.id}>
            <TableRowItem>{item.type}</TableRowItem>
            <TableRowItem>{item.amount}</TableRowItem>
            <TableRowItem>{item.currency}</TableRowItem>
          </TableRow>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
