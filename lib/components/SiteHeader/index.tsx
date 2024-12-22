"use client";
import React, { useState, useEffect, useCallback } from "react";
import { SiteLogo } from "./SiteLogo";
import { Navigation } from "./Navigation";
import { Aside } from "./Aside";

export interface SiteHeaderProps {
  children?: React.ReactNode;
}

const SiteHeaderContainer = ({ children }: SiteHeaderProps) => {
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setVisible(false);
    } else {
      setVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <header
      className={`fixed top-0 z-50 w-full px-6 py-3 h-[62px] md:h-[90px] bg-white idc-header ui-max-w-child-7xl md:px-8 md:py-5 transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-between gap-2">{children}</div>
    </header>
  );
};

export const SiteHeader = Object.assign(SiteHeaderContainer, {
  SiteLogo,
  Navigation,
  Aside,
});
