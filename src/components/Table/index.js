import React from 'react';

import css from './table.module.css';

const Table = ({ rates, active, rowOnClick }) => {
  const rows = rates.map(({ currency, rate, name }) => (
    <tr key={currency}>
      <td data-currency={currency}>{name}</td>
      <td>{currency}</td>
      <td>{rate}</td>
    </tr>
  ));

  return (
    <table className={css.table}>
      <caption className={css.title}>
        {active}
      </caption>
      <thead>
        <tr>
          <th />
          <th>Currency</th>
          <th>Rate</th>
        </tr>
      </thead>
      <tbody onClick={rowOnClick}>{rows}</tbody>
    </table>
  );
};

export default Table;
