import StatusIndicator from "../components/StatusIndicator/StatusIndicator";
import Button from "../components/Button/Button";

function PageNotFound(): React.JSX.Element {
  return (
    <>
      <StatusIndicator
        buttonComponent={Button}
        buttonName="Back to Home"
        suggestion="Sorry, the page you are looking for doesn't exist. You can go back to the main page by clicking the button below."
      >
        Page not found 😢
      </StatusIndicator>
    </>
  );
}

export default PageNotFound;
