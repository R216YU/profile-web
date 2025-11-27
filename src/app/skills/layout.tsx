import { Metadata } from "next";
import React from "react";

type LayoutProps = {
  children?: React.ReactNode;
};

export const metadata: Metadata = {
  title: "ryu's profile - skills",
  description: 'Personal profile page of "ryu"',
};

const layout = ({ children }: Readonly<LayoutProps>) => {
  return <>{children}</>;
};

export default layout;
