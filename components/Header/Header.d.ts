import { default as React } from '../../../node_modules/react';
import { headerSizeClasses, fontWeightClasses } from '../../utils/propClasses';
type headerSizeKeys = keyof typeof headerSizeClasses;
type fontWeightKeys = keyof typeof fontWeightClasses;
export interface HeaderProps {
    children?: React.ReactNode;
    as?: 'h1' | 'h2' | 'h3';
    title: string;
    date?: string | Date;
    datePrefix?: string;
    size?: headerSizeKeys;
    weight?: fontWeightKeys;
    isCenter?: boolean;
    isItalic?: boolean;
}
export declare const Header: ({ children, as, title, date, datePrefix, size, weight, isCenter, isItalic, }: HeaderProps) => import("react/jsx-runtime").JSX.Element;
export {};
