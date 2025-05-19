import { FooterContact } from './FooterContact';
import { FooterDisclaimer } from './FooterDisclaimer';

export interface FooterProps {
  children?: React.ReactNode;
}

export const FooterContainer = ({ children }: FooterProps) => {
  return <footer className="idc-footer">{children}</footer>;
};

export const Footer = Object.assign(FooterContainer, {
  Contact: FooterContact,
  Disclaimer: FooterDisclaimer,
});
