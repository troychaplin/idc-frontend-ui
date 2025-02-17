import { ReactNode } from '../../../node_modules/react';
export interface NavigationProps {
    children?: ReactNode;
}
export interface NavigationLogoProps {
    siteUrl?: string;
}
export interface NavigationItem {
    id: number;
    label: string;
    href: string;
}
export interface NavigationMenuProps {
    items: NavigationItem[];
}
export interface NavigationMobileProps {
    items: NavigationItem[];
}
export interface NavigationDesktopProps {
    children?: ReactNode;
}
export interface NavigationAsideProps {
}
