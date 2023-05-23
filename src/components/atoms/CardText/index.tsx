import clsx from 'clsx';
import styles from './styles.module.scss';

interface CardTextProps {
  name: string;
  size?: 'medium' | 'large';
}

export const CardText: React.FC<CardTextProps> = ({
  name,
  size = 'medium',
}) => (
  <div className={clsx(styles.card_text, size === 'large' && styles.large)}>
    {name}
  </div>
);
