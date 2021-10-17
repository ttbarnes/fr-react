import styles from './GigsList.module.scss';

const YearHeading = ({ yearIndex, year }) => {
  if (yearIndex > 0) {
    return (
      <h2 className={`text-align-center ${styles.yearHeading}`}>{year} gigs</h2>
    );
  }

  return null;
};

export default YearHeading;
