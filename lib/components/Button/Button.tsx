export interface ButtonProps {
  color?: "light-blue" | "dark-blue" | "light-orange" | "dark-orange" | "white";
  label: string;
  type?: "button" | "submit" | "reset";
  size?: "sm" | "md" | "lg";
  isOutline?: boolean;
  noBg?: boolean;
  onClick?: () => void;
}

export const Button = ({
  color = "dark-blue",
  label,
  type = "button",
  size = "md",
  isOutline = false,
  noBg = false,
  onClick,
  ...props
}: ButtonProps) => {
  const buttonStyles = isOutline ? `idc-button--outline` : `idc-button--solid`;
  const noBgColor = noBg && isOutline ? `idc-button--no-bg` : "";

  return (
    <button
      type={type}
      className={`idc-button idc-button--${color} ${buttonStyles} idc-button--${size} ${noBgColor}`}
      onClick={onClick}
      {...props}
    >
      {label}
    </button>
  );
};
