import InformationSection from "../components/InformationSection/InformationSection";
import MapSection from "../components/MapSection/MapSection";
import Button from "../components/Button/Button";
import styles from "./DetailPage.module.css";

function DetailPage(): React.JSX.Element {
  return (
    <div className={styles.detailPage}>
      <Button>Back</Button>
      <MapSection />
      <InformationSection />
    </div>
  );
}

export default DetailPage;
