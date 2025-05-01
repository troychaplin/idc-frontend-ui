export interface HeroMediaProps {
    imageUrl: string;
    imageShape?: 'rectangle' | 'fade' | 'slanted-lines' | 'oval';
    imageZoom?: number;
    focalPointX?: number;
    focalPointY?: number;
}
export declare const HeroMedia: {
    ({ imageUrl, imageZoom, imageShape, focalPointX, focalPointY, }: HeroMediaProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
