import clsx from 'clsx';
import styles from './styles.module.scss';

interface TagsProps {
  id: string;
  name: string;
  color: string;
  tagGroup: string;
}

export const Tags: React.FC<TagsProps> = ({
  name,
  color,
}) => (
  <div className={clsx(styles.tag_container, color && styles[color])}>
    <span className={styles.tag_name}>{name}</span>
  </div>
);

