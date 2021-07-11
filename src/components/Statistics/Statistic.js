import React from "react";
import PropTypes from "prop-types";

import styles from "./Statistic.module.css";
import { randomColor } from "../../helpers/randomColor";

export default function Statistic(props) {
  const { title, stats } = props;
  return (
    <section className={styles.Statistics}>
      {title && <h2 className={styles.Title}>{title}</h2>}

      <ul className={styles.StatList}>
        {stats.map(({ label, percentage, id }) => (
          <li
            className="item"
            key={id}
            className={styles.Item}
            style={{ backgroundColor: randomColor() }}
          >
            <span className={styles.Label}>{label}</span>
            <span className={styles.Percentage}>{percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistic.defaultProps = {
  title: "",
};

Statistic.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
