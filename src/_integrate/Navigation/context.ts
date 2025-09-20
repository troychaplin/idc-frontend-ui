import { createContext, useContext } from 'react';

interface NavigationContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const defaultContext: NavigationContextType = {
  isOpen: false,
  setIsOpen: () => {},
};

export const NavigationContext = createContext<NavigationContextType>(defaultContext);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  return context;
};
