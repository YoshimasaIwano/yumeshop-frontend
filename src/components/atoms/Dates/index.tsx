import clsx from 'clsx';
import styles from './styles.module.scss';

interface DatesProps {
  date: string;
}

function formatDate(dateStr: string): string {
  const dateObj = new Date(dateStr);

  const year = dateObj.getUTCFullYear();
  // JavaScript uses 0-based months, so we need to add 1 to get the correct month.
  const month = dateObj.getUTCMonth() + 1;
  const date = dateObj.getUTCDate();

  return `${year}/${month}/${date}`;
}

export const Dates: React.FC<DatesProps> = ({ date }) => (
  <div className={clsx(styles.date_text)}>
    {formatDate(date)}
  </div>
);
