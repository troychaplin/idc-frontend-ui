import { idcBlueBg } from '../../utils/colorClasses';
type BgColorKeys = keyof typeof idcBlueBg;
export interface ButtonProps {
    color?: 'blue' | 'orange';
    colorStrength?: BgColorKeys;
    textColor?: 'light' | 'dark';
    label: string;
    type?: 'button' | 'submit' | 'reset';
    size?: 'sm' | 'md' | 'lg';
    isOutline?: boolean;
    onClick?: () => void;
}
export declare const Button: ({ color, colorStrength, textColor, label, type, size, isOutline, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export {};
