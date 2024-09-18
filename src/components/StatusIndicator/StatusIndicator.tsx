import styles from "./StatusIndicator.module.css";

interface StatusIndicator {
  children: React.ReactNode;
  img: string;
  suggestion: string;
  className?: string;
}

function StatusIndicator({
  children,
  img,
  suggestion,
  className,
}: StatusIndicator): React.JSX.Element {
  return (
    <div className={`${styles.statusIndicator} ${className ? className : ""}`}>
      <img src={img} alt="" className={styles.statusIcon} />
      <div className={styles.statusMessage}>
        <div className="lds-default">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        
        <p>
          <strong>{children}</strong>
        </p>
        <p>{suggestion}</p>
      </div>
    </div>
  );
}

export default StatusIndicator;
