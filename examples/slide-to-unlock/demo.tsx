"use client";

import { toast } from "sonner";

import {
  SlideToUnlock,
  SlideToUnlockHandle,
  SlideToUnlockText,
  SlideToUnlockTrack,
} from "@/components/ui/pxl/slide-to-unlock";

export default function SlideToUnlockDemo() {
  return (
    <SlideToUnlock
      onUnlock={() => {
        toast.success("Unlocked");
      }}
    >
      <SlideToUnlockTrack>
        <SlideToUnlockText>slide to unlock</SlideToUnlockText>
        <SlideToUnlockHandle />
      </SlideToUnlockTrack>
    </SlideToUnlock>
  );
}
