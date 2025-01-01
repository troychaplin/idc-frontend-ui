import { default as React } from '../../../node_modules/react';
export interface SiteHeaderProps {
    children?: React.ReactNode;
}
export declare const SiteHeader: (({ children }: SiteHeaderProps) => import("react/jsx-runtime").JSX.Element) & {
    SiteLogo: () => import("react/jsx-runtime").JSX.Element;
    Navigation: ({ children }: import('./SiteHeaderNav').NavigationProps) => import("react/jsx-runtime").JSX.Element;
    Aside: () => import("react/jsx-runtime").JSX.Element;
};
