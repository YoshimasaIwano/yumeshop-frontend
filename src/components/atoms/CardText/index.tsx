import styles from './styles.module.scss';

interface CardTextProps {
  name: string;
  CardTextTypes: 'small' | 'middle' | 'large';
}

export const CardText: React.FC<CardTextProps> = ({ name, CardTextTypes }) => {
  return <div className={styles.card_text}>{name}</div>;
};
