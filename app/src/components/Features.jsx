import assets from "../assets";
import styles from "../styles/Global";

const FeaturedCard = ({ iconUrl, iconText }) => (
  <div className={styles.featureCard}>
    <img src={iconUrl} alt="icon" className={styles.featureImg} />
    <p className={styles.featureText}>{iconText}</p>
  </div>
);

const Features = () => {
  return (
    <div className={`${styles.section} ${styles.bgPrimary} banner03`}>
      <div className={`${styles.subSection} flex-col text-center`}>
        <div>
          <h1 className={`${styles.h1Text} ${styles.whiteText}`}>
            Technologies
          </h1>
          <p className={`${styles.pText} ${styles.whiteText}`}>
            Nef has been devolved using cross-platform technology, React Native
          </p>

          <div className={styles.flexWrap}>
            <FeaturedCard iconUrl={assets.react} iconText="React Native" />
            <FeaturedCard iconUrl={assets.javascript} iconText="Javascript" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
