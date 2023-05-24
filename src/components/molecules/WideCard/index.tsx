import { DateText } from 'src/components/atoms/DateText';
import { CardText } from 'src/components/atoms/CardText';
import { Tag, TagProps } from 'src/components/atoms/Tag';
import styles from './styles.module.scss';

interface WideCardProps {
  id: string;
  title: string;
  detail: string;
  announcedAt: string;
  tags: TagProps[];
}

export const WideCard: React.FC<WideCardProps> = ({
  detail,
  announcedAt,
  tags,
}) => (
  <div className={styles.card_container}>
    <div className={styles.card_title_container}>
      <DateText date={announcedAt} />
      {tags.map((tag) => (
        <Tag
          key={tag.id}
          id={tag.id}
          name={tag.name}
          color={tag.color}
          tagGroup={tag.tagGroup}
        />
      ))}
    </div>
    <CardText name={detail} />
  </div>
);
