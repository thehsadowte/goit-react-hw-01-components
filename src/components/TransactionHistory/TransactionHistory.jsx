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
          <TableHeadItem>{upperCaseHeaderTable('Type')}</TableHeadItem>
          <TableHeadItem>{upperCaseHeaderTable('Amount')}</TableHeadItem>
          <TableHeadItem>{upperCaseHeaderTable('Currency')}</TableHeadItem>
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

function upperCaseHeaderTable(title) {
  return title.toUpperCase();
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
