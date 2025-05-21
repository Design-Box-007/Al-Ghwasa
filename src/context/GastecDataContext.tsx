"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { GastecDataType } from "@/types";

interface GastecDataContextValue {
  selectedItem: GastecDataType | null;
  setSelectedItem: (item: GastecDataType) => void;
}

const GastecDataContext = createContext<GastecDataContextValue | undefined>(
  undefined
);

export const GastecDataProvider = ({ children }: { children: ReactNode }) => {
  const [selectedItem, setSelectedItem] = useState<GastecDataType | null>(null);

  return (
    <GastecDataContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </GastecDataContext.Provider>
  );
};

export const useGastecData = () => {
  const context = useContext(GastecDataContext);
  if (!context) {
    throw new Error("useGastecData must be used within a GastecDataProvider");
  }
  return context;
};
