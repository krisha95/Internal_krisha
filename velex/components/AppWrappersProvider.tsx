"use client";
import { LayoutProvider } from "@/context/useLayoutContext";
import { ChildrenType } from "@/types";
import React from "react";

const AppWrappersProvider = ({ children }: ChildrenType) => {
  return <LayoutProvider>{children}</LayoutProvider>;
};

export default AppWrappersProvider;
