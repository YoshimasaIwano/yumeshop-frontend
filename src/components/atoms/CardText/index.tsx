import styles from './styles.module.scss';

interface CardTextProps {
  name: string;
  CardTextTypes: 'small' | 'middle' | 'large';
}

export const CardText: React.FC<CardTextProps> = ({ name, CardTextTypes }) => (
  <>
    {CardTextTypes === 'large' && (
      <div className={styles.card_text}>{name}</div>
    )}
    {CardTextTypes === 'middle' && (
      <div className={styles.card_text}>{name}</div>
    )}
    {CardTextTypes === 'small' && (
      <div className={styles.card_text}>{name}</div>
    )}
  </>
);
