/**
 * Navigation functionality for vanilla JavaScript
 * Matches functionality of React Navigation component
 */
declare class Navigation {
    constructor(selector: any);
    header: any;
    isOpen: boolean;
    lastScrollY: number;
    visible: boolean;
    scrollThreshold: number;
    init(): void;
    handleScroll(): void;
    setVisible(visible: any): void;
    handleToggle(): void;
    handleClose(): void;
}
