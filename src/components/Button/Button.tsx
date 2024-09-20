import { Dispatch, ReactNode, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Button.module.css";
import { ReactComponent as BackArrow } from "../../assets/icons/arrow-back-outline.svg";

export interface ButtonProps {
  children: ReactNode;
  navigateTo?: number | string;
  positionAbsolute?: boolean;
  backArrow?: boolean;
  clearError?: Dispatch<SetStateAction<string>>;
  callbackFn?: () => Promise<void>;
}

function Button({
  children,
  navigateTo = -1,
  positionAbsolute = false,
  backArrow = false,
  clearError,
  callbackFn,
}: ButtonProps): React.JSX.Element {
  const navigate = useNavigate();

  function handleNavigation() {
    if (clearError) clearError("");
    if (callbackFn) callbackFn();

    // TypeScript needs to know whether navigateTo is a number (for history navigation)
    // or a string (for path navigation), so we use the if statement to help TS select
    // the correct overload of the navigate() function
    if (typeof navigateTo === "number") {
      navigate(navigateTo);
    } else {
      navigate(navigateTo);
    }
  }

  return (
    <button
      className={`${styles.button} ${
        positionAbsolute && styles.positionAbsolute
      }
        ${clearError && styles.clearError}
      }`}
      onClick={handleNavigation}
    >
      {backArrow && <BackArrow className={styles.backArrowIcon} />}
      <span>{children}</span>
    </button>
  );
}

export default Button;
