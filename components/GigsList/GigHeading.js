import styles from './GigsList.module.scss';

const GigHeading = ({ yearIndex, title }) => {
  if (yearIndex === 0) {
    return (
      <h2 className={`h4-size ${styles.listItemHeading}`}>{title}</h2>
    );
  }
  
  return (
    <h3 className={`h4-size ${styles.listItemHeading}`}>{title}</h3>
  );
};

export default GigHeading;
