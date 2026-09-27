"use client";

import { QRCode } from "@/components/ui/pxl/qr-code";

export default function QRCodeDemo() {
  return <QRCode className="max-w-sm" data="https://github.com/pxl-ui/registry" />;
}
