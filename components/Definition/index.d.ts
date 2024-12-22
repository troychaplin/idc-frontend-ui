export interface DefinitionProps {
    children: React.ReactNode;
}
export declare const DefinitionWrapper: {
    ({ children }: DefinitionProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export declare const Definition: {
    ({ children }: DefinitionProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
} & {
    Accordion: {
        ({ title, children }: import('./accordion').DefinitionAccordionProps): import("react/jsx-runtime").JSX.Element;
        displayName: string;
    };
};
