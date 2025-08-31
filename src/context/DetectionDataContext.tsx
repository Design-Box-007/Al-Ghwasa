"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";
import { DetectionTubeItem } from "@/types";

interface DetectionDataContextValue {
  selectedItem: DetectionTubeItem | null;
  setSelectedItem: (item: DetectionTubeItem) => void;
}

const DetectionDataContext = createContext<DetectionDataContextValue | undefined>(
  undefined
);

export const DetectionDataProvider = ({ children }: { children: ReactNode }) => {
  const [selectedItem, setSelectedItem] = useState<DetectionTubeItem | null>(null);

  return (
    <DetectionDataContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </DetectionDataContext.Provider>
  );
};

export const useDetectionData = () => {
  const context = useContext(DetectionDataContext);
  if (!context) {
    throw new Error("useDetectionData must be used within a DetectionDataProvider");
  }
  return context;
};
