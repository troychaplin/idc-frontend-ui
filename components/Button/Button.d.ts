export interface ButtonProps {
    color?: "light-blue" | "dark-blue" | "light-orange" | "dark-orange" | "white";
    label: string;
    type?: "button" | "submit" | "reset";
    size?: "sm" | "md" | "lg";
    isOutline?: boolean;
    noBg?: boolean;
    onClick?: () => void;
}
export declare const Button: ({ color, label, type, size, isOutline, noBg, onClick, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
