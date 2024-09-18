import styles from "./StatusIndicator.module.css";
import { ButtonProps } from "../Button/Button";

interface StatusIndicator {
  children: React.ReactNode;
  img?: string;
  suggestion?: string;
  className?: string;
  spinner?: boolean;
  buttonComponent?: React.FC<ButtonProps>;
}

function StatusIndicator({
  children,
  img,
  suggestion,
  className,
  spinner = false,
  buttonComponent: Button,
}: StatusIndicator): React.JSX.Element {
  return (
    <div className={`${styles.statusIndicator} ${className ? className : ""}`}>
      {img && <img src={img} alt="" className={styles.statusIcon} />}
      <div className={styles.statusMessage}>
        {spinner && <div className="loadingIndicator">Loading&#8230;</div>}
        <p className={styles.errorMessage}>
          <strong>{children}</strong>
        </p>
        <p className={styles.suggestionMessage}>{suggestion}</p>
        {Button && <Button navigateTo="/">Back to Home</Button>}
      </div>
    </div>
  );
}

export default StatusIndicator;
