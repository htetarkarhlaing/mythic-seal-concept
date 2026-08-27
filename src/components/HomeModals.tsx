"use client";

import React from "react";
import VideoModal from "@/components/VideoModal";
import { useAppStore } from "@/store/useAppStore";

export function HomeModals() {
  const isVideoModalOpen = useAppStore((state) => state.isVideoModalOpen);
  const setIsVideoModalOpen = useAppStore((state) => state.setIsVideoModalOpen);

  return (
    <VideoModal
      isOpen={isVideoModalOpen}
      onClose={() => setIsVideoModalOpen(false)}
    />
  );
}
