export interface CardContentProps {
    text?: string;
    link?: string;
    linkText?: string;
    isExcerpt?: boolean;
    hideMobile?: boolean;
}
export declare const CardContent: {
    ({ text, link, linkText, isExcerpt, hideMobile }: CardContentProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
