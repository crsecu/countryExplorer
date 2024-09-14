import styles from "./StatusIndicator.module.css";

interface StatusIndicator {
  children: React.ReactNode;
  img: string;
  suggestion: string;
}

function StatusIndicator({
  children,
  img,
  suggestion,
}: StatusIndicator): React.JSX.Element {
  return (
    <div className={styles.statusIndicator}>
      <img src={img} alt="" className={styles.statusIcon} />
      <div className={styles.statusMessage}>
        <p>
          <strong>{children}</strong>
        </p>
        <p>{suggestion}</p>
      </div>
    </div>
  );
}

export default StatusIndicator;
