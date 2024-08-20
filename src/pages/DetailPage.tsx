import InformationSection from "../components/InformationSection/InformationSection";
import MapSection from "../components/MapSection/MapSection";
import styles from "./DetailPage.module.css";

function DetailPage(): React.JSX.Element {
  return (
    <div className={styles.detailPage}>
      <MapSection />
      <InformationSection />
    </div>
  );
}

export default DetailPage;
