export interface CardHeaderProps {
    title: string;
    as?: 'h2' | 'h3';
    date?: string | Date;
    datePrefix?: string;
}
export declare const CardHeader: {
    ({ title, as, date, datePrefix }: CardHeaderProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
