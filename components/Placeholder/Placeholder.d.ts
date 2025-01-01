import { uiMaxWidth } from '../../utils/propClasses';
type maxWidthKeys = keyof typeof uiMaxWidth;
export interface PlaceholderProps {
    name?: string;
    maxWidth?: maxWidthKeys;
}
export declare const Placeholder: ({ name, maxWidth, }: PlaceholderProps) => import("react/jsx-runtime").JSX.Element;
export {};
