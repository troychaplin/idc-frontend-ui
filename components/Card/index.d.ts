import { uiMaxWidth, uiRoundedCorners, uiDropShadow } from '../../utils/propClasses';
type MaxWidthKeys = keyof typeof uiMaxWidth;
type RoundedKeys = keyof typeof uiRoundedCorners;
type ShadowKeys = keyof typeof uiDropShadow;
export interface CardProps {
    children?: React.ReactNode;
    maxWidth?: MaxWidthKeys;
    rounded?: RoundedKeys;
    shadow?: ShadowKeys;
    borderWidth?: number;
    borderColor?: string;
}
export declare const Card: ({ children, maxWidth, rounded, shadow, borderWidth, borderColor }: CardProps) => import("react/jsx-runtime").JSX.Element;
export {};
