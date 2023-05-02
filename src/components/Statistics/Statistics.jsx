import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(data => (
          <li key={data.id} className={css.item}>
            <span className={css.label}>{data.label}</span>
            <span className={css.percentage}>{data.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.defaultProps = {
  title: '',
};
Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};

export default Statistics;

// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };

// export default Statistics;

// export const Statistics = ({ title, stats }) => {
//   return (
//     <section className="css.statistics">
//       {title && <h2 className="css.title">{title}</h2>}
//       <ul className="css.stat-list">
//         {stats.map(stat => (
//           <li className="css.item" key={stat.id}>
//             <span className="css.label">{stat.label}</span>
//             <span className="css.percentage">{stat.percentage}</span>
//           </li>
//         ))}

//         <li className="css.item">
//           <span className="css.label">{stats.label}</span>
//           <span className="css.percentage">{stats.percentage}</span>
//         </li>
//         <li className="css.item">
//           <span className="css.label">{stats.label}</span>
//           <span className="css.percentage">{stats.percentage}</span>
//         </li>
//         <li className="css.item">
//           <span className="css.label">{stats.label}</span>
//           <span className="css.percentage">{stats.percentage}</span>
//         </li>
//       </ul>
//     </section>
//   );
// };

// Statistics.PropTypes = {
//   title: PropTypes.string,
//   stats: {
//     label: PropTypes.isRequired,
//     percentage: PropTypes.number.isRequired,
//   },
// };
// Statistics.propTypes = {
//   title: PropTypes.string,
//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     })
//   ).isRequired,
// };
// export default Statistics;
