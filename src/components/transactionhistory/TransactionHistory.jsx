import css from './TransactionHistory.module.css';
import { TableItem } from './tableitem/TableItem';

export const TransactionHistory = ({transactions}) => {
  return (
    <table className={css['transactions-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <TableItem transactions={transactions} />
      </tbody>
    </table>
  );
};
