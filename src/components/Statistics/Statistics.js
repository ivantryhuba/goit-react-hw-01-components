import PropTypes from "prop-types";

export default function Statistics(props) {
  const { title, stats } = props;
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        <li class="item">
          <span class="label">stats.label</span>
          <span class="percentage">stats.percentage</span>
        </li>
        <li class="item">
          <span class="label">stats.label</span>
          <span class="percentage">stats.percentage</span>
        </li>
        <li class="item">
          <span class="label">stats.label</span>
          <span class="percentage">stats.percentage</span>
        </li>
        <li class="item">
          <span class="label">stats.label</span>
          <span class="percentage">stats.percentage</span>
        </li>
      </ul>
    </section>
  );
}