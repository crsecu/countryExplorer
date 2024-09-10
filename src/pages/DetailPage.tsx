import InformationSection from "../components/InformationSection/InformationSection";
import MapSection from "../components/MapSection/MapSection";
import Button from "../components/Button/Button";
import styles from "./DetailPage.module.css";

function DetailPage(): React.JSX.Element {
  return (
    <div className={styles.detailPage}>
      <InformationSection />
      <div className={styles.sectionWrapper}>
        <Button>Back</Button>
        <MapSection />
      </div>
    </div>
  );
}

export default DetailPage;
