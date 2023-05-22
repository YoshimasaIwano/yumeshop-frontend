import styles from './styles.module.scss';

interface HeadlineProps {
  label: string;
  headlineTypes: 'small' | 'middle' | 'large';
}

export const Headline: React.FC<HeadlineProps> = (props) => {
  const { label, headlineTypes } = props;

  return (
    <>
      {headlineTypes === 'large' && (
        <h1 className={styles.headline}>{label}</h1>
      )}
      {headlineTypes === 'middle' && (
        <h2 className={styles.headline}>{label}</h2>
      )}
      {headlineTypes === 'small' && (
        <h3 className={styles.headline}>{label}</h3>
      )}
    </>
  );
};
