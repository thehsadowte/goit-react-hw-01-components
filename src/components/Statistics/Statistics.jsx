import PropTypes from 'prop-types';

export const Statistics = ({ stats, title }) => {
  return (
    <section className={statistics}>
      {title && <h2 className={title}>{title}</h2>}

      <ul className={statList}>
        {stats.map(el => (
          <li key={el.id} className={css.item}>
            <span className={css.label}>{el.label}</span>
            <span className={css.percentage}>{el.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
