import styles from "./StatusIndicator.module.css";
import { ButtonProps } from "../Button/Button";
import { Dispatch, SetStateAction } from "react";

interface StatusIndicator {
  children: React.ReactNode;
  img?: string;
  suggestion?: string;
  className?: string;
  spinner?: boolean;
  overlay?: boolean;
  buttonComponent?: React.FC<ButtonProps>;
  stateSetter?: Dispatch<SetStateAction<string>>;
  callbackFn?: () => Promise<void>;
}

function StatusIndicator({
  children,
  img,
  suggestion,
  className,
  spinner = false,
  overlay = false,
  buttonComponent: Button,
  stateSetter,
  callbackFn,
}: StatusIndicator): React.JSX.Element {
  return (
    <div className={`${styles.statusIndicator} ${className ? className : ""}`}>
      {img && <img src={img} alt="" className={styles.statusIcon} />}
      <div className={styles.statusMessage}>
        {spinner && <div className="loadingIndicator"></div>}
        {overlay && <div className="overlay"></div>}
        <p className={styles.errorMessage}>
          <strong>{children}</strong>
        </p>
        <p className={styles.suggestionMessage}>{suggestion}</p>
        {Button && (
          <Button
            navigateTo="/"
            clearError={stateSetter}
            callbackFn={callbackFn}
          >
            Back to Home
          </Button>
        )}
      </div>
    </div>
  );
}

export default StatusIndicator;
