export interface HeroMediaProps {
    imageUrl: string;
    imageShape?: 'rectangle' | 'radial-fade' | 'dotted-corners' | 'slanted-lines' | 'oval-edges';
    imageZoom?: number;
    focalPointX?: number;
    focalPointY?: number;
    basePath?: string;
}
export declare const HeroMedia: {
    ({ imageUrl, imageZoom, imageShape, focalPointX, focalPointY, basePath, }: HeroMediaProps): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
