"use client";

import Header from "@/components/header";
import MobileNav from "@/components/mobileNav";
import React from "react";
import { useWindowSize } from "usehooks-ts";

const AuthenticatedTemplate = ({ children }: { children: React.ReactNode }) => {
  const { width } = useWindowSize();

  const containerHeight = React.useMemo(() => {
    return "100vh - 151px";
  }, [width]);

  return (
    <>
      <Header />
      <div
        style={{ height: `calc(${containerHeight})` }}
        className="bg-secondary-gray hideScroll overflow-y-auto px-3 py-5 md:px-8"
      >
        {children}
      </div>
      <MobileNav />
    </>
  );
};

export default AuthenticatedTemplate;
