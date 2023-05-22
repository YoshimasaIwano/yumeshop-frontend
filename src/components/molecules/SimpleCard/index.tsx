import Image from "next/image";
import styles from './styles.module.scss';
import { CardText } from "src/components/atoms/CardText";

interface SimpleCardProps {
    // id: string;
    name: string;
    thumbnail: string;
    SimpleCardTypes: 'small' | 'middle' | 'large';
}

export const SimpleCard: React.FC<SimpleCardProps> = ({
  name,
  thumbnail,
  SimpleCardTypes,
}) => {
  return (
    <>
      {SimpleCardTypes == 'large' && (
        <div className={styles.card_container}>
          <Image src={thumbnail} alt="買い物袋" className={styles.card_image} />
          <CardText name={name} CardTextTypes={SimpleCardTypes} />
        </div>
      )}
      {SimpleCardTypes == 'middle' && (
        <div className={styles.card_container}>
          <Image src={thumbnail} alt="買い物袋" className={styles.card_image} />
          <CardText name={name} CardTextTypes={SimpleCardTypes} />
        </div>
      )}
      {SimpleCardTypes == 'small' && (
        <div className={styles.card_container}>
          <Image src={thumbnail} alt="買い物袋" className={styles.card_image} />
          <CardText name={name} CardTextTypes={SimpleCardTypes} />
        </div>
      )}
    </>
  );
};