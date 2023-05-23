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
      alt={name} // TODO: APIから取得できないので、とりあえずnameを入れておく。
      className={styles.card_image}
    />
    <div className={styles.card_text_contaier}>
      <CardText name={name} />
    </div>
    
  </div>
);
