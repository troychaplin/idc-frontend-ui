interface NavigationContextType {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}
export declare const NavigationContext: import('../../../node_modules/react').Context<NavigationContextType>;
export declare const useNavigation: () => NavigationContextType;
export {};
