import { default as React } from '../../../node_modules/react';
export interface BluePanelContentProps {
    children: React.ReactNode;
    bgType?: 'dark' | 'light';
}
export declare const BluePanelContent: {
    ({ children, bgType }: BluePanelContentProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
