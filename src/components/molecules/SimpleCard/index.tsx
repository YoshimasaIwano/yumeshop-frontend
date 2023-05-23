import Image from 'next/image';
import { CardText } from '../../atoms/CardText';
import styles from './styles.module.scss';

interface SimpleCardProps {
  // id: string;
  name: string;
  thumbnail: string;
}

export const SimpleCard: React.FC<SimpleCardProps> = ({ name, thumbnail }) => (
  <div className={styles.card_container}>
    <Image
      src={thumbnail}
      width={200}
      height={200}
      alt="買い物袋"
      className={styles.card_image}
    />
    <CardText name={name} />
  </div>
);
