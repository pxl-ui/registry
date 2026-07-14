import type * as React from "react";

import BasicGradiantLabelExample from "@/app/examples/basic-gradiant-label";
import { OpenInV0Button } from "@/components/open-in-v0-button";
import { RegistryCommand } from "@/components/registry-command";
import { ShowSourceButton } from "@/components/show-source-button";

import BasicMarqueeTextExample from "./examples/basic-marquee-text";
import ChromeGradiantLabelExample from "./examples/chrome-gradiant-label";
import CryoGradiantLabelExample from "./examples/cryo-gradiant-label";
import FireGradiantLabelExample from "./examples/fire-gradiant-label";
import LootGradiantLabelExample from "./examples/loot-gradiant-label";
import PlasmaGradiantLabelExample from "./examples/plasma-gradiant-label";
import ShadowGradiantLabelExample from "./examples/shadow-gradiant-label";
import SynthwaveGradiantLabelExample from "./examples/synthwave-gradiant-label";
import ToxicGradiantLabelExample from "./examples/toxic-gradiant-label";

interface ComponentDisplayProps {
  name: string;
  description: string;
  minHeight?: string;
  filePath: string;
  children: React.ReactNode;
}

function ComponentDisplay({
  name,
  description,
  minHeight = "400px",
  filePath,
  children,
}: ComponentDisplayProps) {
  return (
    <div className="flex flex-col gap-4 border rounded-lg p-4 min-h-112.5 relative">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-sm text-muted-foreground sm:pl-3">{name}</h2>
          <p className="text-xs text-muted-foreground sm:pl-3">{description}</p>
        </div>
        <div className="flex gap-2">
          <ShowSourceButton filePath={filePath} />
          <OpenInV0Button name={name} />
        </div>
      </div>
      <div
        className={`flex flex-col items-center justify-center min-h-[${minHeight}] relative`}
      >
        {children}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col min-h-svh px-4 py-8 gap-8">
      <header className="flex flex-col gap-1 space-y-6 mb-6">
        <h1 className="text-3xl font-heading italic font-bold tracking-tight">
          PXL-CN
        </h1>
        <p className="text-muted-foreground">
          A shadcn components registry extension for{" "}
          <a href="https://www.8bitcn.com/" target="__blank">
            8bitcn
          </a>
          .
        </p>
        <RegistryCommand registryId="gradiant-label" />
      </header>

      <main className="flex flex-col flex-1 gap-8">
        <ComponentDisplay
          name="gradiant-label"
          description="A label with gradiant colors to recreate retro style game indicators"
          filePath="app/examples/basic-gradiant-label.tsx"
        >
          <BasicGradiantLabelExample />
          <FireGradiantLabelExample />
          <CryoGradiantLabelExample />
          <LootGradiantLabelExample />
          <PlasmaGradiantLabelExample />
          <ToxicGradiantLabelExample />
          <ShadowGradiantLabelExample />
          <SynthwaveGradiantLabelExample />
          <ChromeGradiantLabelExample />
        </ComponentDisplay>
        <ComponentDisplay
          name="marquee-text"
          description=""
          filePath="app/examples/basic-marquee-text.tsx"
        >
          <BasicMarqueeTextExample />
        </ComponentDisplay>
      </main>
    </div>
  );
}
