import { TransactionHistoryItem } from './TransactionHistoryItem';
import {
  TransactionHistoryStyled,
  TransactionHistoryRow,
  TableHeadItem,
  TableHead,
} from './TransactionHistory.styled';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryStyled>
      <TableHead>
        <TransactionHistoryRow>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </TransactionHistoryRow>
      </TableHead>

      <tbody>
        {items.map(item => (
          <TransactionHistoryRow key={item.id}>
            <TransactionHistoryItem item={item} />
          </TransactionHistoryRow>
        ))}
      </tbody>
    </TransactionHistoryStyled>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
