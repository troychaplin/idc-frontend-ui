import { default as React } from '../../../node_modules/react';
export interface HeroMediaProps {
    /**
     * The media content to be displayed
     */
    children: React.ReactNode;
    /**
     * The type of mask to apply to the media
     */
    mask?: 'oval' | 'slanted-lines' | 'rectangle';
    /**
     * The background color of the media container
     */
    backgroundColor?: string;
    /**
     * The base path to the SVG mask assets
     * @default '/assets'
     */
    assetsPath?: string;
    /**
     * Additional class names to apply to the container
     */
    className?: string;
}
export declare const HeroMedia: React.FC<HeroMediaProps>;
