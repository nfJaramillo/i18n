import React from "react";
import { FormattedDate, FormattedNumber, useIntl } from 'react-intl';



const Job = (props) => {
  var lng = useIntl().locale;
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td><FormattedNumber value={props.offer.salary}/> {lng==="es"?props.offer.salary === 1?"millon":"millones":"million"}</td>
      <td>{props.offer.city}</td>
      <td><FormattedDate
        value={new Date(props.offer.date)}
        year='numeric'
        month='long'
        day='numeric'
        weekday='long'
      /></td>
      <td><FormattedNumber value={props.offer.views} thousandSeparator={true} /></td>
    </tr>
  );
};

export default Job;
