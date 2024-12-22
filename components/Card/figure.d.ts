import { default as React } from '../../../node_modules/react';
import { iconNames } from '../../utils/iconList';
type IconNamesKeys = keyof typeof iconNames;
export interface CardFigureProps {
    children?: React.ReactNode;
    iconName?: IconNamesKeys;
}
export declare const CardFigure: {
    ({ children, iconName }: CardFigureProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};
