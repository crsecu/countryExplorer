import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps): React.JSX.Element {
  const navigate = useNavigate();
  return (
    <button
      className={styles.backButton}
      onClick={() => {
        navigate(-1);
      }}
    >
      {children}
    </button>
  );
}

export default Button;
