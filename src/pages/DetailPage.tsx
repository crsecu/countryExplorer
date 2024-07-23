import InformationSection from "../components/InformationSection";
import MapSection from "../components/MapSection";

function DetailPage(): React.JSX.Element {
  return (
    <div className="detailPage">
      <InformationSection />
      <MapSection />
    </div>
  );
}

export default DetailPage;
