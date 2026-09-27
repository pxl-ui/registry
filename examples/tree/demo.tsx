"use client";

import {
  TreeExpander,
  TreeIcon,
  TreeLabel,
  TreeNode,
  TreeNodeContent,
  TreeNodeTrigger,
  TreeProvider,
  TreeView,
} from "@/components/ui/pxl/tree";

export default function TreeDemo() {
  return (
    <TreeProvider
      defaultExpandedIds={["src", "components", "ui"]}
      onSelectionChange={(ids) => console.log("Selected:", ids)}
    >
      <TreeView>
        <TreeNode nodeId="src">
          <TreeNodeTrigger>
            <TreeExpander hasChildren />
            <TreeIcon hasChildren />
            <TreeLabel>src</TreeLabel>
          </TreeNodeTrigger>
          <TreeNodeContent hasChildren>
            <TreeNode level={1} nodeId="components">
              <TreeNodeTrigger>
                <TreeExpander hasChildren />
                <TreeIcon hasChildren />
                <TreeLabel>components</TreeLabel>
              </TreeNodeTrigger>
              <TreeNodeContent hasChildren>
                <TreeNode level={2} nodeId="ui">
                  <TreeNodeTrigger>
                    <TreeExpander hasChildren />
                    <TreeIcon hasChildren />
                    <TreeLabel>ui</TreeLabel>
                  </TreeNodeTrigger>
                  <TreeNodeContent hasChildren>
                    <TreeNode level={3} nodeId="button.tsx">
                      <TreeNodeTrigger>
                        <TreeExpander />
                        <TreeIcon icon={<svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M11 18H9v-4h2v4Zm-4-1H5v-2h2v2Zm12-2v2h-2v-2h2ZM5 15H3v-2h2v2Zm16 0h-2v-2h2v2Zm-8-1h-2v-4h2v4ZM3 13H1v-2h2v2Zm20 0h-2v-2h2v2ZM5 11H3V9h2v2Zm16 0h-2V9h2v2Zm-6-1h-2V6h2v4ZM7 9H5V7h2v2Zm12 0h-2V7h2v2Z"/></svg>} />
                        <TreeLabel>button.tsx</TreeLabel>
                      </TreeNodeTrigger>
                    </TreeNode>
                    <TreeNode level={3} nodeId="card.tsx">
                      <TreeNodeTrigger>
                        <TreeExpander />
                        <TreeIcon icon={<svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M11 18H9v-4h2v4Zm-4-1H5v-2h2v2Zm12-2v2h-2v-2h2ZM5 15H3v-2h2v2Zm16 0h-2v-2h2v2Zm-8-1h-2v-4h2v4ZM3 13H1v-2h2v2Zm20 0h-2v-2h2v2ZM5 11H3V9h2v2Zm16 0h-2V9h2v2Zm-6-1h-2V6h2v4ZM7 9H5V7h2v2Zm12 0h-2V7h2v2Z"/></svg>} />
                        <TreeLabel>card.tsx</TreeLabel>
                      </TreeNodeTrigger>
                    </TreeNode>
                    <TreeNode isLast level={3} nodeId="dialog.tsx">
                      <TreeNodeTrigger>
                        <TreeExpander />
                        <TreeIcon icon={<svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M11 18H9v-4h2v4Zm-4-1H5v-2h2v2Zm12-2v2h-2v-2h2ZM5 15H3v-2h2v2Zm16 0h-2v-2h2v2Zm-8-1h-2v-4h2v4ZM3 13H1v-2h2v2Zm20 0h-2v-2h2v2ZM5 11H3V9h2v2Zm16 0h-2V9h2v2Zm-6-1h-2V6h2v4ZM7 9H5V7h2v2Zm12 0h-2V7h2v2Z"/></svg>} />
                        <TreeLabel>dialog.tsx</TreeLabel>
                      </TreeNodeTrigger>
                    </TreeNode>
                  </TreeNodeContent>
                </TreeNode>
                <TreeNode isLast level={2} nodeId="layout">
                  <TreeNodeTrigger>
                    <TreeExpander hasChildren />
                    <TreeIcon hasChildren />
                    <TreeLabel>layout</TreeLabel>
                  </TreeNodeTrigger>
                  <TreeNodeContent hasChildren>
                    <TreeNode level={3} nodeId="header.tsx">
                      <TreeNodeTrigger>
                        <TreeExpander />
                        <TreeIcon icon={<svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M11 18H9v-4h2v4Zm-4-1H5v-2h2v2Zm12-2v2h-2v-2h2ZM5 15H3v-2h2v2Zm16 0h-2v-2h2v2Zm-8-1h-2v-4h2v4ZM3 13H1v-2h2v2Zm20 0h-2v-2h2v2ZM5 11H3V9h2v2Zm16 0h-2V9h2v2Zm-6-1h-2V6h2v4ZM7 9H5V7h2v2Zm12 0h-2V7h2v2Z"/></svg>} />
                        <TreeLabel>header.tsx</TreeLabel>
                      </TreeNodeTrigger>
                    </TreeNode>
                    <TreeNode isLast level={3} nodeId="footer.tsx">
                      <TreeNodeTrigger>
                        <TreeExpander />
                        <TreeIcon icon={<svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M11 18H9v-4h2v4Zm-4-1H5v-2h2v2Zm12-2v2h-2v-2h2ZM5 15H3v-2h2v2Zm16 0h-2v-2h2v2Zm-8-1h-2v-4h2v4ZM3 13H1v-2h2v2Zm20 0h-2v-2h2v2ZM5 11H3V9h2v2Zm16 0h-2V9h2v2Zm-6-1h-2V6h2v4ZM7 9H5V7h2v2Zm12 0h-2V7h2v2Z"/></svg>} />
                        <TreeLabel>footer.tsx</TreeLabel>
                      </TreeNodeTrigger>
                    </TreeNode>
                  </TreeNodeContent>
                </TreeNode>
              </TreeNodeContent>
            </TreeNode>
          </TreeNodeContent>
        </TreeNode>
        <TreeNode nodeId="public">
          <TreeNodeTrigger>
            <TreeExpander hasChildren />
            <TreeIcon hasChildren />
            <TreeLabel>public</TreeLabel>
          </TreeNodeTrigger>
          <TreeNodeContent hasChildren>
            <TreeNode isLast level={1} nodeId="images">
              <TreeNodeTrigger>
                <TreeExpander hasChildren />
                <TreeIcon hasChildren />
                <TreeLabel>images</TreeLabel>
              </TreeNodeTrigger>
              <TreeNodeContent hasChildren>
                <TreeNode level={2} nodeId="logo.svg">
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon icon={<svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M18 22H6v-2h12v2ZM6 20H4V4h2v16ZM16 4h-2v4h4V6h2v14h-2V10h-6V4H6V2h10v2Zm0 14H8v-2h8v2Zm0-4H8v-2h8v2Zm-6-4H8V8h2v2Zm8-4h-2V4h2v2Z"/></svg>} />
                    <TreeLabel>logo.svg</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
                <TreeNode isLast level={2} nodeId="hero.png">
                  <TreeNodeTrigger>
                    <TreeExpander />
                    <TreeIcon icon={<svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M18 22H6v-2h12v2ZM6 20H4V4h2v16ZM16 4h-2v4h4V6h2v14h-2V10h-6V4H6V2h10v2Zm0 14H8v-2h8v2Zm0-4H8v-2h8v2Zm-6-4H8V8h2v2Zm8-4h-2V4h2v2Z"/></svg>} />
                    <TreeLabel>hero.png</TreeLabel>
                  </TreeNodeTrigger>
                </TreeNode>
              </TreeNodeContent>
            </TreeNode>
          </TreeNodeContent>
        </TreeNode>
        <TreeNode nodeId="package.json">
          <TreeNodeTrigger>
            <TreeExpander />
            <TreeIcon icon={<svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v2H6zm12 0h-4v2h4zM6 20h4v-2H6zm12 0h-4v-2h4zM4 6h2v5H4zm16 0h-2v5h2zM4 18h2v-5H4zm16 0h-2v-5h2zM2 11h2v2H2zm20 0h-2v2h2z"/></svg>} />
            <TreeLabel>package.json</TreeLabel>
          </TreeNodeTrigger>
        </TreeNode>
        <TreeNode nodeId="tsconfig.json">
          <TreeNodeTrigger>
            <TreeExpander />
            <TreeIcon icon={<svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M6 4h4v2H6zm12 0h-4v2h4zM6 20h4v-2H6zm12 0h-4v-2h4zM4 6h2v5H4zm16 0h-2v5h2zM4 18h2v-5H4zm16 0h-2v-5h2zM2 11h2v2H2zm20 0h-2v2h2z"/></svg>} />
            <TreeLabel>tsconfig.json</TreeLabel>
          </TreeNodeTrigger>
        </TreeNode>
        <TreeNode isLast nodeId="README.md">
          <TreeNodeTrigger>
            <TreeExpander />
            <TreeIcon icon={<svg className="size-4" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M18 22H6v-2h12v2ZM6 20H4V4h2v16ZM16 4h-2v4h4V6h2v14h-2V10h-6V4H6V2h10v2Zm0 14H8v-2h8v2Zm0-4H8v-2h8v2Zm-6-4H8V8h2v2Zm8-4h-2V4h2v2Z"/></svg>} />
            <TreeLabel>README.md</TreeLabel>
          </TreeNodeTrigger>
        </TreeNode>
      </TreeView>
    </TreeProvider>
  );
}
