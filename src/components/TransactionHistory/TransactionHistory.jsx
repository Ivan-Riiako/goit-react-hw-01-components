import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.table_header}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={styles.table_body}>
        {items.map(item => (
          <tr key={item.id} className={styles.table_body_tr}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
// напиши стили к этой таблице, таблица на пол экрана, горизонтальные строки через одну светло серые


TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
