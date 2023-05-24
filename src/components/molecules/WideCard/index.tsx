import { Dates } from 'src/components/atoms/Dates';
import { CardText } from 'src/components/atoms/CardText';
import { Tags } from 'src/components/atoms/Tags';
import styles from './styles.module.scss';

type TagTypes = {
  id: string;
  name: string;
  color: string;
  tagGroup: string;
};

interface WideCardProps {
  id: string;
  title: string;
  detail: string;
  announcedAt: string;
  tags: TagTypes[];
}

export const WideCard: React.FC<WideCardProps> = ({
  detail,
  announcedAt,
  tags,
}) => (
  <div className={styles.card_container}>
    <div className={styles.card_title_container}>
      <Dates date={announcedAt} />
      {tags.map((tag) => (
        <Tags
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
