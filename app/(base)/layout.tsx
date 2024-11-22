import { Header } from "@/components/header";
import React from "react";
import {Footer} from "@/components/footer";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
