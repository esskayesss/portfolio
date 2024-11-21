import {Header} from "@/components/header";
import React from "react";

export default function BaseLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header blog>
      </Header>
      {children}
    </>
  );
}
