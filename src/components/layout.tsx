import { activePageButton } from "@/utils/activePageButton";
import React, { PropsWithChildren, useEffect, useState } from "react";
import Navbar from "./Navbar";

export default function Layout({ children }: PropsWithChildren){
  return (
    <>
      <Navbar/>
      {children}
    </>
  );
};