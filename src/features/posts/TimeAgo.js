import React from 'react';
import { parseISO, formatDistanceToNow } from 'date-fns';

export const TimeAgo = ({ timestamp }) => {
  let timeAgo = '';
  if (timestamp) {
    const data = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(data);
    timeAgo = `${timePeriod} ago`;
  }

  return (
    <span title={timestamp}>
      &nbsp; <i>{timeAgo}</i>
    </span>
  )
}