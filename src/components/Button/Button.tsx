import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface ButtonProps {
  children: ReactNode;
}

function Button({ children }: ButtonProps): React.JSX.Element {
  const navigate = useNavigate();
  return (
    <button
      onClick={(e) => {
        navigate(-1);
      }}
    >
      {children}
    </button>
  );
}

export default Button;
