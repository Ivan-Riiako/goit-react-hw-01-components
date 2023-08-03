import PropTypes from 'prop-types';
import styles from './Statistics.module.css';
// import  getRandomHexColor  from '../../utils/randomColor';
import {getRandomHexColor} from '../../utils/';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={styles.container}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={styles.statList}>
        {stats.map(({id,label,percentage}) => (
          <li
            className={styles.item}
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <span className={styles.label}>{label}</span>
            <span className={styles.percentage}>{percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.PropTypes.exact({
      id: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
