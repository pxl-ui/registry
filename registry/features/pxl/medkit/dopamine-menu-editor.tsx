"use client";

import { Feedback } from "@dnd-kit/dom";
import { SortableKeyboardPlugin } from "@dnd-kit/dom/sortable";
import { DragDropProvider, useDroppable } from "@dnd-kit/react";
import { useSortable } from "@dnd-kit/react/sortable";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";
import {
  type ComponentProps,
  createContext,
  useContext,
  useId,
  useRef,
  useState,
} from "react";

import { DopamineMenuItemLine } from "@/components/features/pxl/medkit/dopamine-menu";
import { Alert, AlertDescription } from "@/components/ui/pxl/alert";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/pxl/alert-dialog";
import { Button } from "@/components/ui/pxl/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/pxl/collapsible";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/pxl/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/pxl/dropdown-menu";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/pxl/field";
import { Input } from "@/components/ui/pxl/input";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/pxl/popover";
import { ScrollArea } from "@/components/ui/pxl/scroll-area";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/pxl/select";
import { Textarea } from "@/components/ui/pxl/textarea";
import {
  type Menu,
  type MenuItem,
  MenuSchema,
  type MenuSection,
} from "@/lib/schemas/pxl/schemaorg/food-establishment";

const IMAGE_PLACEHOLDER =
  "https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/icons/food/92_sandwich.png";

/** Import validation is intentionally stricter than the shared Schema.org schema. */
function parseDopamineMenu(json: string): Menu {
  const input: unknown = JSON.parse(json);
  const result = MenuSchema.safeParse(input);
  if (!result.success) {
    throw new Error(
      result.error.issues
        .map((issue) => `${issue.path.join(".") || "menu"}: ${issue.message}`)
        .join("\n"),
    );
  }
  if (!result.data.name?.trim())
    throw new Error("name: A menu name is required.");
  // Some nested shared schemas strip extensions. Validation must not alter imports.
  return input as Menu;
}

function serializeDopamineMenu(menu: Menu): string {
  // Validate without replacing the object: preserve untouched extension values.
  parseDopamineMenu(JSON.stringify(menu));
  return JSON.stringify(menu, null, 2);
}

function primaryImage(image: Menu["image"]): string {
  const first = Array.isArray(image) ? image[0] : image;
  return typeof first === "string" ? first : (first?.contentUrl ?? "");
}

function replacePrimaryImage(image: Menu["image"], url: string): Menu["image"] {
  const first = Array.isArray(image) ? image[0] : image;
  const replacement =
    typeof first === "object" ? { ...first, contentUrl: url } : url;
  return Array.isArray(image) ? [replacement, ...image.slice(1)] : replacement;
}

function reorder<T>(items: readonly T[], from: number, to: number): T[] {
  const next = [...items];
  if (from < 0 || from >= next.length || to < 0 || to >= next.length)
    return next;
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

function moveMenuItem(
  menu: Menu,
  fromSection: number,
  fromItem: number,
  toSection: number,
  toItem: number,
): Menu {
  const sections = [...(menu.hasMenuSection ?? [])];
  const source = sections[fromSection];
  const target = sections[toSection];
  if (!source || !target || !source.hasMenuItem?.[fromItem]) return menu;
  if (fromSection === toSection) {
    sections[fromSection] = {
      ...source,
      hasMenuItem: reorder(source.hasMenuItem, fromItem, toItem),
    };
  } else {
    const sourceItems = [...source.hasMenuItem];
    const [item] = sourceItems.splice(fromItem, 1);
    const targetItems = [...(target.hasMenuItem ?? [])];
    targetItems.splice(
      Math.max(0, Math.min(toItem, targetItems.length)),
      0,
      item,
    );
    sections[fromSection] = { ...source, hasMenuItem: sourceItems };
    sections[toSection] = { ...target, hasMenuItem: targetItems };
  }
  return { ...menu, hasMenuSection: sections };
}

function updateDuration(
  item: MenuItem,
  price: number | string | undefined,
  unit?: string,
): MenuItem {
  const offers = { ...item.offers };
  if (price === undefined) delete offers.price;
  else offers.price = price;
  if (unit !== undefined) offers.priceCurrency = unit;
  if (!item.offers && price !== undefined) {
    offers["@type"] = "Offer";
    offers.priceCurrency ??= "minutes";
  }
  return { ...item, offers };
}

function hasPreservedStructures(menu: Menu): boolean {
  return Boolean(
    menu.hasMenuItem?.length ||
      menu.hasMenuSection?.some(
        (section: MenuSection) =>
          section.hasMenuSection?.length ||
          section.hasMenuItem?.some((item) => item.menuAddon?.length),
      ),
  );
}

const defaultLabels = {
  menuName: "Menu name",
  sectionName: "Section name",
  itemName: "Item name",
  details: "Edit details",
  description: "Description",
  image: "Image URL",
  duration: "Duration",
  unit: "Unit",
  minutes: "Minutes",
  hours: "Hours",
  days: "Days",
  addSection: "Add section",
  addItem: "Add item",
  addDescription: "Add description",
  addImage: "Add image",
  removeDescription: "Remove description",
  removeImage: "Remove image",
  actions: "Actions",
  drag: "Drag to reorder",
  expand: "Expand",
  collapse: "Collapse",
  moveUp: "Move up",
  moveDown: "Move down",
  moveTo: "Move to section",
  remove: "Delete",
  cancel: "Cancel",
  deleteTitle: "Delete this content?",
  deleteSection: "This section and all its activities will be deleted.",
  deleteItem: "This item will be deleted.",
  import: "Import JSON",
  export: "Export JSON",
  json: "JSON",
  file: "JSON file",
  copy: "Copy JSON",
  download: "Download JSON",
  importHelp: "Choose a JSON file or paste a menu. A menu name is required.",
  exportHelp: "Copy the JSON or download a file to keep your menu.",
  replaceTitle: "Replace this menu?",
  replaceDescription: "Importing will replace your current changes.",
  replace: "Replace menu",
  preserved:
    "Additional nested content is preserved when exporting. This editor only edits top-level sections and their activities.",
  empty: "Add a section to start your menu.",
  emptySection: "Add an item or drop one here.",
  nameRequired: "A menu name is required.",
  invalidJson: "The menu could not be imported.",
  copyFailed: "Copy failed. Select the JSON below or download the file.",
  copied: "JSON copied.",
  moved: "Order updated.",
  dragStarted:
    "Reordering. Use arrow keys to move, Space to drop, or Escape to cancel.",
  dragCanceled: "Reordering canceled.",
};
type DopamineMenuEditorLabels = typeof defaultLabels;

const EditorContext = createContext<{
  menu: Menu;
  labels: DopamineMenuEditorLabels;
  id: (object: object) => string;
  change: (menu: Menu) => void;
  sectionChange: (index: number, section: MenuSection) => void;
  itemChange: (section: number, index: number, item: MenuItem) => void;
  moveItem: (
    section: number,
    index: number,
    target: number,
    position: number,
  ) => void;
  confirm: (description: string, action: () => void) => void;
  open: Set<string>;
  setOpen: (id: string, open: boolean) => void;
  focus: string | null;
  setFocus: (id: string | null) => void;
} | null>(null);

function useEditor() {
  const context = useContext(EditorContext);
  if (!context)
    throw new Error("Dopamine Menu Editor parts require DopamineMenuEditor.");
  return context;
}

const imageButtonVariants = cva("pixel-rounded bg-muted", {
  variants: {
    size: {
      sm: "pixel-size-md [&_img]:size-4",
      md: "pixel-size-md [&_img]:size-6",
      lg: "pixel-size-md [&_img]:size-8",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

function ImageField({
  size = "lg",
  value,
  onChange,
}: {
  value: Menu | MenuSection | MenuItem;
  onChange: (value: Menu) => void;
} & VariantProps<typeof imageButtonVariants>) {
  const { labels } = useEditor();
  const uid = useId();

  if (!value.image) {
    return null;
  }

  return (
    <Popover>
      <PopoverTrigger
        render={
          <div
            className={imageButtonVariants({
              size,
            })}
          >
            <img
              className="pixelated"
              alt="value-image"
              src={primaryImage(value.image)}
            />
          </div>
        }
      />
      <PopoverContent className="w-80">
        <Field className="min-w-0 gap-1">
          <FieldLabel htmlFor={`${uid}-image`}>{labels.image}</FieldLabel>
          <Input
            id={`${uid}-image`}
            type="url"
            value={primaryImage(value.image)}
            onChange={(event) =>
              onChange({
                ...value,
                image: replacePrimaryImage(value.image, event.target.value),
              })
            }
          />
        </Field>
      </PopoverContent>
    </Popover>
  );
}

const descriptionFieldVariants = cva(
  "font-serif text-muted-foreground [&_textarea]:min-h-0 [&_textarea]:resize-none",
  {
    variants: {
      size: {
        sm: "[&_textarea]:text-2xs [&_textarea]:py-0",
        md: "[&_textarea]:text-xs [&_textarea]:py-0",
        lg: "[&_textarea]:text-sm [&_textarea]:py-0",
      },
    },
    defaultVariants: {
      size: "lg",
    },
  },
);

function DescriptionField({
  className,
  size = "lg",
  value,
  onChange,
}: {
  className?: string;
  value: Menu | MenuSection | MenuItem;
  onChange: (value: Menu) => void;
} & VariantProps<typeof descriptionFieldVariants>) {
  const { labels } = useEditor();
  const uid = useId();
  return (
    <Field className="flex min-w-0 items-center gap-1">
      <Textarea
        className={descriptionFieldVariants({
          size,
          className,
        })}
        border="none"
        id={`${uid}-description`}
        aria-label={labels.description}
        placeholder={labels.description}
        value={value.description ?? ""}
        onChange={(event) =>
          onChange({ ...value, description: event.target.value })
        }
      />
    </Field>
  );
}

function RowActions({ section, item }: { section: number; item?: number }) {
  const editor = useEditor();
  const { menu, labels, change, sectionChange, itemChange, moveItem, confirm } =
    editor;
  const sections = menu.hasMenuSection ?? [];
  const currentSection = sections[section];
  const index = item ?? section;
  const count =
    item === undefined
      ? sections.length
      : (currentSection.hasMenuItem?.length ?? 0);
  const currentItem =
    item === undefined ? undefined : (currentSection.hasMenuItem ?? [])[item];

  function move(offset: number) {
    if (item === undefined)
      change({
        ...menu,
        hasMenuSection: reorder(sections, section, section + offset),
      });
    else moveItem(section, item, section, item + offset);
  }

  function remove() {
    confirm(
      item === undefined ? labels.deleteSection : labels.deleteItem,
      () => {
        if (item === undefined)
          change({
            ...menu,
            hasMenuSection: sections.filter((_, index) => index !== section),
          });
        else
          sectionChange(section, {
            ...currentSection,
            hasMenuItem: currentSection.hasMenuItem?.filter(
              (_, index) => index !== item,
            ),
          });
      },
    );
  }

  function toggleDescription() {
    if (item === undefined)
      sectionChange(section, {
        ...currentSection,
        description: currentSection.description ? undefined : " ",
      });
    else
      itemChange(section, item, {
        ...currentItem,
        description: currentItem?.description ? undefined : " ",
      });
  }

  function toggleImage() {
    if (item === undefined)
      sectionChange(section, {
        ...currentSection,
        image: currentSection.image ? undefined : IMAGE_PLACEHOLDER,
      });
    else
      itemChange(section, item, {
        ...currentItem,
        image: currentItem?.image ? undefined : IMAGE_PLACEHOLDER,
      });
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <Button size="icon-xs" variant="ghost" aria-label={labels.actions} />
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M5 15H3v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2ZM3 13H1v-2h2v2Zm4 0H5v-2h2v2Zm4 0H9v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM5 11H3V9h2v2Zm8 0h-2V9h2v2Zm8 0h-2V9h2v2Z" />
        </svg>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuGroup>
          <DropdownMenuItem disabled={index === 0} onClick={() => move(-1)}>
            {labels.moveUp}
          </DropdownMenuItem>
          <DropdownMenuItem
            disabled={index === count - 1}
            onClick={() => move(1)}
          >
            {labels.moveDown}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={toggleDescription}>
            {item === undefined
              ? currentSection.description
                ? labels.removeDescription
                : labels.addDescription
              : currentItem?.description
                ? labels.removeDescription
                : labels.addDescription}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={toggleImage}>
            {item === undefined
              ? currentSection.image
                ? labels.removeImage
                : labels.addImage
              : currentItem?.image
                ? labels.removeImage
                : labels.addImage}
          </DropdownMenuItem>
          {item !== undefined && sections.length > 1 && (
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>{labels.moveTo}</DropdownMenuSubTrigger>
              <DropdownMenuSubContent>
                <DropdownMenuGroup>
                  {sections.map(
                    (target, targetIndex) =>
                      targetIndex !== section && (
                        <DropdownMenuItem
                          key={editor.id(target)}
                          onClick={() =>
                            moveItem(
                              section,
                              item,
                              targetIndex,
                              target.hasMenuItem?.length ?? 0,
                            )
                          }
                        >
                          {target.name || labels.sectionName}
                        </DropdownMenuItem>
                      ),
                  )}
                </DropdownMenuGroup>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
          )}
          <DropdownMenuItem variant="destructive" onClick={remove}>
            {labels.remove}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

function ItemRow({
  item,
  index,
  section,
}: {
  item: MenuItem;
  index: number;
  section: number;
}) {
  const editor = useEditor();
  const { labels, itemChange } = editor;
  const uid = editor.id(item);
  const sortable = useSortable({
    id: uid,
    index,
    group: editor.id(editor.menu.hasMenuSection?.[section] ?? item),
    type: "item",
    accept: "item",
    plugins: [SortableKeyboardPlugin],
    transition: null,
  });
  const unit = item.offers?.priceCurrency ?? "minutes";
  const units = ["minutes", "hours", "days"];
  if (!units.includes(unit)) units.push(unit);
  const change = (next: MenuItem) => itemChange(section, index, next);
  return (
    <div
      ref={sortable.ref}
      data-slot="dopamine-menu-editor-item"
      className="group/dopamine-menu-editor-item min-w-0 font-serif"
    >
      <div className="flex min-w-0 items-center gap-1">
        <Button
          ref={sortable.handleRef}
          size="icon-xs"
          variant="ghost"
          className="touch-none md:opacity-0 md:group-hover/dopamine-menu-editor-item:opacity-100"
          data-drag-handle={uid}
          aria-label={`${labels.drag}: ${item.name || labels.itemName}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M7 1h2v2h-2zM15 1h2v2h-2zM5 3h2v2h-2zM9 3h2v2h-2zM13 3h2v2h-2zM17 3h2v2h-2zM7 5h2v2h-2zM15 5h2v2h-2zM7 9h2v2h-2zM15 9h2v2h-2zM5 11h2v2h-2zM9 11h2v2h-2zM13 11h2v2h-2zM17 11h2v2h-2zM7 13h2v2h-2zM15 13h2v2h-2zM7 17h2v2h-2zM15 17h2v2h-2zM5 19h2v2h-2zM9 19h2v2h-2zM13 19h2v2h-2zM17 19h2v2h-2zM7 21h2v2h-2zM15 21h2v2h-2z"></path>
          </svg>
        </Button>
        <ImageField
          size="md"
          value={item}
          onChange={(next) => editor.itemChange(section, index, next)}
        />
        <Input
          size="xs"
          border="none"
          className="min-w-0 max-w-full **:data-[slot=input]:field-sizing-content **:data-[slot=input]:w-auto **:data-[slot=input]:max-w-full"
          aria-label={labels.itemName}
          placeholder={labels.itemName}
          value={item.name ?? ""}
          autoFocus={editor.focus === uid}
          onFocus={() => editor.setFocus(null)}
          onChange={(event) => change({ ...item, name: event.target.value })}
        />
        <DopamineMenuItemLine size="md" className="min-w-2 self-end" />
        <div className="max-w-32 truncate shrink-0 flex items-baseline gap-1">
          <Input
            id={`${uid}-duration`}
            type="text"
            border="none"
            className="w-auto [&_input]:field-sizing-content [&_input]:min-w-0 [&_input]:w-auto [&_input]:h-6 [&_input]:text-xs [&_input]:px-0 [&_input]:text-end"
            min={0}
            step="any"
            value={item.offers?.price ?? "-"}
            onChange={(event) => {
              const price = event.target.value;
              change(updateDuration(item, price));
            }}
          />
          <Select
            value={unit}
            onValueChange={(next) => {
              if (next) change(updateDuration(item, item.offers?.price, next));
            }}
          >
            <SelectTrigger
              border="none"
              id={`${uid}-unit`}
              className="py-0 px-0 h-6 w-fit min-w-0 text-xs"
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {units.map((value) => (
                  <SelectItem key={value} value={value}>
                    {labels[value as "minutes" | "hours" | "days"] ?? value}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <RowActions section={section} item={index} />
      </div>
      {item.description && (
        <div
          data-slot="dopamine-menu-item-description"
          className="flex min-w-0 items-center gap-1 ml-6"
        >
          <DescriptionField
            size="sm"
            value={item}
            onChange={(next) => editor.itemChange(section, index, next)}
          />
        </div>
      )}
    </div>
  );
}

function SectionRow({
  section,
  index,
}: {
  section: MenuSection;
  index: number;
}) {
  const editor = useEditor();
  const { labels } = editor;
  const uid = editor.id(section);
  const expanded = editor.open.has(uid);
  const sortable = useSortable({
    id: uid,
    index,
    type: "section",
    accept: "section",
    group: "sections",
    plugins: [SortableKeyboardPlugin],
    transition: null,
  });
  const drop = useDroppable({
    id: `${uid}-drop`,
    type: "section-drop",
    accept: "item",
    data: { sectionId: uid },
    collisionPriority: -1,
  });

  return (
    <div
      ref={sortable.ref}
      data-slot="dopamine-menu-editor-section"
      className="group/dopamine-menu-editor-section min-w-0"
    >
      <div
        ref={drop.ref}
        className={cn("min-w-0", drop.isDropTarget && "bg-muted")}
      >
        <Collapsible
          open={expanded}
          onOpenChange={(open) => editor.setOpen(uid, open)}
        >
          <div className="flex min-w-0 items-center gap-1">
            <Button
              ref={sortable.handleRef}
              size="icon-xs"
              variant="ghost"
              className="touch-none md:opacity-0 md:group-hover/dopamine-menu-editor-section:opacity-100"
              data-drag-handle={uid}
              aria-label={`${labels.drag}: ${section.name || labels.sectionName}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 1h2v2h-2zM15 1h2v2h-2zM5 3h2v2h-2zM9 3h2v2h-2zM13 3h2v2h-2zM17 3h2v2h-2zM7 5h2v2h-2zM15 5h2v2h-2zM7 9h2v2h-2zM15 9h2v2h-2zM5 11h2v2h-2zM9 11h2v2h-2zM13 11h2v2h-2zM17 11h2v2h-2zM7 13h2v2h-2zM15 13h2v2h-2zM7 17h2v2h-2zM15 17h2v2h-2zM5 19h2v2h-2zM9 19h2v2h-2zM13 19h2v2h-2zM17 19h2v2h-2zM7 21h2v2h-2zM15 21h2v2h-2z"></path>
              </svg>
            </Button>
            <CollapsibleTrigger
              render={
                <Button
                  size="icon-xs"
                  variant="ghost"
                  aria-label={expanded ? labels.collapse : labels.expand}
                />
              }
            >
              {expanded ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17 9v2h-2v2h-2v2h-2v-2H9v-2H7V9h10Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 17h2v-2h2v-2h2v-2h-2V9h-2V7H9v10Z" />
                </svg>
              )}
            </CollapsibleTrigger>
            <ImageField
              size="md"
              value={section}
              onChange={(next) => editor.sectionChange(index, next)}
            />
            <Input
              size="xs"
              border="none"
              className="min-w-0 flex-1 font-serif [&_input]:text-sm!"
              value={section.name ?? ""}
              aria-label={labels.sectionName}
              placeholder={labels.sectionName}
              autoFocus={editor.focus === uid}
              onFocus={() => editor.setFocus(null)}
              onChange={(event) =>
                editor.sectionChange(index, {
                  ...section,
                  name: event.target.value,
                })
              }
            />
            <RowActions section={index} />
          </div>
          {section.description && (
            <div
              data-slot="dopamine-menu-description"
              className="flex min-w-0 items-center gap-1 ml-10 pt-0.5"
            >
              <DescriptionField
                value={section}
                size="md"
                onChange={(next) => editor.sectionChange(index, next)}
              />
            </div>
          )}
          <CollapsibleContent>
            <div className="flex min-w-0 flex-col gap-1 py-1 pl-4.5">
              {!section.hasMenuItem?.length && (
                <p className="px-2 py-1 text-xs text-muted-foreground">
                  {labels.emptySection}
                </p>
              )}
              {section.hasMenuItem?.map((item, itemIndex) => (
                <ItemRow
                  key={editor.id(item)}
                  item={item}
                  index={itemIndex}
                  section={index}
                />
              ))}
              <Button
                size="icon-xs"
                variant="ghost"
                className="self-start text-muted-foreground ml-8 w-full"
                onClick={() => {
                  const item: MenuItem = { "@type": "MenuItem", name: "" };
                  const id = editor.id(item);
                  editor.setOpen(id, true);
                  editor.setFocus(id);
                  editor.sectionChange(index, {
                    ...section,
                    hasMenuItem: [...(section.hasMenuItem ?? []), item],
                  });
                }}
              >
                <svg
                  data-icon="inline-start"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 11h7v2h-7v7h-2v-7H4v-2h7V4h2v7Z" />
                </svg>
                {/* {labels.addItem} */}
              </Button>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
}

function DopamineMenuEditor({
  value,
  defaultValue,
  onValueChange,
  labels: customLabels,
  className,
  ...props
}: Omit<ComponentProps<"div">, "defaultValue" | "onChange"> & {
  value?: Menu;
  defaultValue?: Menu;
  onValueChange?: (menu: Menu) => void;
  labels?: Partial<DopamineMenuEditorLabels>;
}) {
  const labels = { ...defaultLabels, ...customLabels };
  const [internal, setInternal] = useState<Menu>(
    () => defaultValue ?? { "@type": "Menu", name: "", hasMenuSection: [] },
  );
  const menu = value ?? internal;
  const keys = useRef(new WeakMap<object, string>());
  const sequence = useRef(0);
  const prefix = useId();
  function id(object: object) {
    let key = keys.current.get(object);
    if (!key) {
      key = `${prefix}-${++sequence.current}`;
      keys.current.set(object, key);
    }
    return key;
  }
  const [open, updateOpen] = useState(
    () => new Set(menu.hasMenuSection?.[0] ? [id(menu.hasMenuSection[0])] : []),
  );
  const [focus, setFocus] = useState<string | null>(null);
  const [dialog, setDialog] = useState<"import" | "export" | null>(null);
  const [json, setJson] = useState("");
  const [error, setError] = useState("");
  const [announcement, announce] = useState("");
  const [confirmation, setConfirmation] = useState<{
    title: string;
    description: string;
    action: () => void;
  } | null>(null);
  const baseline = useRef(JSON.stringify(menu));
  const draft = useRef<Menu | null>(null);
  const dragMenu = useRef<Menu | null>(null);
  const [preview, setPreview] = useState<Menu | null>(null);
  const activeMenu = preview ?? menu;
  const dragHandle = useRef<HTMLElement | null>(null);
  const dragId = useRef<string | null>(null);
  const root = useRef<HTMLDivElement | null>(null);

  function preserveKeys(next: Menu, previous: Menu) {
    next.hasMenuSection?.forEach((section, index) => {
      const old = previous.hasMenuSection?.[index];
      if (old && !keys.current.has(section)) keys.current.set(section, id(old));
    });
    return next;
  }
  function change(next: Menu) {
    if (value === undefined) setInternal(next);
    onValueChange?.(next);
  }
  function sectionChange(index: number, section: MenuSection) {
    const sections = [...(activeMenu.hasMenuSection ?? [])];
    keys.current.set(section, id(sections[index]));
    sections[index] = section;
    change({ ...activeMenu, hasMenuSection: sections });
  }
  function itemChange(section: number, index: number, item: MenuItem) {
    const current = activeMenu.hasMenuSection?.[section];
    if (!current) return;
    const items = [...(current.hasMenuItem ?? [])];
    keys.current.set(item, id(items[index]));
    items[index] = item;
    sectionChange(section, { ...current, hasMenuItem: items });
  }
  function moveItem(
    section: number,
    index: number,
    target: number,
    position: number,
  ) {
    const next = preserveKeys(
      moveMenuItem(activeMenu, section, index, target, position),
      activeMenu,
    );
    change(next);
    announce(labels.moved);
  }
  function setOpen(uid: string, expanded: boolean) {
    updateOpen((previous) => {
      const next = new Set(previous);
      if (expanded) next.add(uid);
      else next.delete(uid);
      return next;
    });
  }
  function openDialog(mode: "import" | "export") {
    setError("");
    if (mode === "export") {
      try {
        setJson(serializeDopamineMenu(menu));
      } catch (error) {
        setError(error instanceof Error ? error.message : labels.nameRequired);
        return;
      }
    } else setJson("");
    setDialog(mode);
  }
  function importJson() {
    try {
      const imported = parseDopamineMenu(json);
      const apply = () => {
        change(imported);
        baseline.current = JSON.stringify(imported);
        updateOpen(
          new Set(
            imported.hasMenuSection?.[0]
              ? [id(imported.hasMenuSection[0])]
              : [],
          ),
        );
        setDialog(null);
        setError("");
      };
      if (JSON.stringify(menu) !== baseline.current)
        setConfirmation({
          title: labels.replaceTitle,
          description: labels.replaceDescription,
          action: apply,
        });
      else apply();
    } catch (error) {
      setError(error instanceof Error ? error.message : labels.invalidJson);
    }
  }
  function download() {
    const url = URL.createObjectURL(
      new Blob([json], { type: "application/ld+json" }),
    );
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "dopamine-menu.json";
    anchor.click();
    setTimeout(() => URL.revokeObjectURL(url), 0);
  }

  return (
    <EditorContext.Provider
      value={{
        menu: activeMenu,
        labels,
        id,
        change,
        sectionChange,
        itemChange,
        moveItem,
        confirm: (description, action) =>
          setConfirmation({ title: labels.deleteTitle, description, action }),
        open,
        setOpen,
        focus,
        setFocus,
      }}
    >
      <div
        {...props}
        ref={root}
        data-slot="dopamine-menu-editor"
        className={cn("min-w-0 w-full", className)}
      >
        <div className="shrink-0 ml-8">
          <div
            data-slot="dopamine-menu-title"
            className="font-heading flex min-w-0 items-center gap-1"
          >
            <ImageField value={menu} onChange={change} />
            <Input
              border="none"
              className="min-w-0 flex-1 [&_input]:py-0 [&_input]:text-lg font-not-jam-blackletter-16"
              aria-label={labels.menuName}
              placeholder={labels.menuName}
              value={menu.name ?? ""}
              onChange={(event) => {
                setError("");
                change({ ...menu, name: event.target.value });
              }}
            />
            <DropdownMenu>
              <DropdownMenuTrigger
                render={
                  <Button
                    variant="ghost"
                    size="icon-xs"
                    aria-label={labels.actions}
                  />
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 15H3v-2h2v2Zm8 0h-2v-2h2v2Zm8 0h-2v-2h2v2ZM3 13H1v-2h2v2Zm4 0H5v-2h2v2Zm4 0H9v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2Zm4 0h-2v-2h2v2ZM5 11H3V9h2v2Zm8 0h-2V9h2v2Zm8 0h-2V9h2v2Z" />
                </svg>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuGroup>
                  <DropdownMenuItem onClick={() => openDialog("import")}>
                    {labels.import}
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => openDialog("export")}>
                    {labels.export}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      change({
                        ...menu,
                        description: menu.description ? undefined : " ",
                      })
                    }
                  >
                    {menu.description
                      ? labels.removeDescription
                      : labels.addDescription}
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() =>
                      change({
                        ...menu,
                        image: menu.image ? undefined : IMAGE_PLACEHOLDER,
                      })
                    }
                  >
                    {menu.image ? labels.removeImage : labels.addImage}
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          {menu.description && (
            <div
              data-slot="dopamine-menu-description"
              className="flex min-w-0 items-center gap-1"
            >
              <DescriptionField value={menu} onChange={change} />
            </div>
          )}
        </div>
        <div className="flex min-h-0 flex-col pt-4">
          <ScrollArea className="grid min-h-0 flex-1 grid-rows-1">
            <div className="flex min-w-0 flex-col gap-3">
              {error && !dialog && (
                <Alert variant="destructive" border="none">
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              {hasPreservedStructures(menu) && (
                <Alert role="note" border="none">
                  <AlertDescription>{labels.preserved}</AlertDescription>
                </Alert>
              )}
              <DragDropProvider
                plugins={(defaults) => [
                  ...defaults,
                  Feedback.configure({
                    dropAnimation: null,
                    keyboardTransition: null,
                  }),
                ]}
                onDragStart={(event) => {
                  draft.current = menu;
                  dragMenu.current = menu;
                  dragId.current = String(event.operation.source?.id ?? "");
                  dragHandle.current =
                    document.activeElement instanceof HTMLElement
                      ? document.activeElement
                      : null;
                  announce(labels.dragStarted);
                }}
                onDragOver={(event) => {
                  const { source, target } = event.operation;
                  const current = dragMenu.current;
                  if (!source || !target || !current) return;
                  if (source.id === target.id) {
                    draft.current = current;
                    return;
                  }
                  const sections = current.hasMenuSection ?? [];
                  let next = current;
                  let changesGroup = false;
                  if (source.type === "section" && target.type === "section") {
                    const from = sections.findIndex(
                      (section) => id(section) === source.id,
                    );
                    const to = sections.findIndex(
                      (section) => id(section) === target.id,
                    );
                    if (from >= 0 && to >= 0)
                      next = {
                        ...current,
                        hasMenuSection: reorder(sections, from, to),
                      };
                  } else if (source.type === "item") {
                    const from = sections.findIndex((section) =>
                      section.hasMenuItem?.some(
                        (item) => id(item) === source.id,
                      ),
                    );
                    const sourceIndex =
                      sections[from]?.hasMenuItem?.findIndex(
                        (item) => id(item) === source.id,
                      ) ?? -1;
                    const to = sections.findIndex((section) =>
                      target.type === "section-drop"
                        ? id(section) === target.data.sectionId
                        : section.hasMenuItem?.some(
                            (item) => id(item) === target.id,
                          ),
                    );
                    const targetIndex =
                      target.type === "section-drop"
                        ? (sections[to]?.hasMenuItem?.length ?? 0)
                        : (sections[to]?.hasMenuItem?.findIndex(
                            (item) => id(item) === target.id,
                          ) ?? -1);
                    changesGroup = from !== to;
                    // A section's own background must not repeatedly append its active item.
                    if (
                      from >= 0 &&
                      to >= 0 &&
                      sourceIndex >= 0 &&
                      !(from === to && target.type === "section-drop")
                    )
                      next = preserveKeys(
                        moveMenuItem(
                          current,
                          from,
                          sourceIndex,
                          to,
                          targetIndex,
                        ),
                        current,
                      );
                  }
                  if (next !== current) {
                    draft.current = next;
                    // Keep the active row mounted until drop, especially for closed targets.
                    if (!changesGroup) {
                      dragMenu.current = next;
                      setPreview(next);
                    }
                  } else {
                    draft.current = current;
                  }
                }}
                onDragEnd={(event) => {
                  const next = draft.current;
                  draft.current = null;
                  dragMenu.current = null;
                  setPreview(null);
                  if (!event.canceled && event.operation.target && next) {
                    change(next);
                    announce(labels.moved);
                  } else announce(labels.dragCanceled);
                  requestAnimationFrame(() => {
                    let handle = root.current?.querySelector<HTMLElement>(
                      `[data-drag-handle="${CSS.escape(dragId.current ?? "")}"]`,
                    );
                    if (!handle && next) {
                      const destination = next.hasMenuSection?.find((section) =>
                        section.hasMenuItem?.some(
                          (item) => id(item) === dragId.current,
                        ),
                      );
                      if (destination)
                        handle = root.current?.querySelector<HTMLElement>(
                          `[data-drag-handle="${CSS.escape(id(destination))}"]`,
                        );
                    }
                    if (handle) handle.focus();
                    else if (dragHandle.current?.isConnected)
                      dragHandle.current.focus();
                  });
                }}
              >
                <div className="flex min-w-0 flex-col gap-3">
                  {!activeMenu.hasMenuSection?.length && (
                    <p className="px-2 text-xs text-muted-foreground">
                      {labels.empty}
                    </p>
                  )}
                  {activeMenu.hasMenuSection?.map((section, index) => (
                    <SectionRow
                      key={id(section)}
                      section={section}
                      index={index}
                    />
                  ))}
                </div>
              </DragDropProvider>
              <Button
                variant="ghost"
                size="xs"
                className="self-start text-muted-foreground w-full ml-10"
                onClick={() => {
                  const section: MenuSection = {
                    "@type": "MenuSection",
                    name: "",
                    hasMenuItem: [],
                  };
                  const uid = id(section);
                  setOpen(uid, true);
                  setFocus(uid);
                  change({
                    ...menu,
                    hasMenuSection: [...(menu.hasMenuSection ?? []), section],
                  });
                }}
              >
                <svg
                  data-icon="inline-start"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M13 11h7v2h-7v7h-2v-7H4v-2h7V4h2v7Z" />
                </svg>
                {/* {labels.addSection} */}
              </Button>
            </div>
          </ScrollArea>
        </div>
        <span role="status" aria-live="polite" className="sr-only">
          {announcement}
        </span>
      </div>
      <Dialog
        open={dialog !== null}
        onOpenChange={(open) => {
          if (!open) {
            setDialog(null);
            setError("");
          }
        }}
      >
        <DialogContent className="max-h-full overflow-y-auto">
          <DialogHeader>
            <DialogTitle>
              {dialog === "import" ? labels.import : labels.export}
            </DialogTitle>
            <DialogDescription>
              {dialog === "import" ? labels.importHelp : labels.exportHelp}
            </DialogDescription>
          </DialogHeader>
          <FieldGroup className="gap-3">
            {dialog === "import" && (
              <Field>
                <FieldLabel htmlFor={`${prefix}-file`}>
                  {labels.file}
                </FieldLabel>
                <Input
                  id={`${prefix}-file`}
                  type="file"
                  accept=".json,application/json,application/ld+json"
                  onChange={async (event) => {
                    const file = event.target.files?.[0];
                    if (!file) return;
                    try {
                      setJson(await file.text());
                      setError("");
                    } catch {
                      setError(labels.invalidJson);
                    }
                  }}
                />
              </Field>
            )}
            <Field data-invalid={Boolean(error)}>
              <FieldLabel htmlFor={`${prefix}-json`}>{labels.json}</FieldLabel>
              <Textarea
                id={`${prefix}-json`}
                className="max-h-80 overflow-y-auto"
                rows={8}
                readOnly={dialog === "export"}
                value={json}
                aria-invalid={Boolean(error)}
                aria-describedby={error ? `${prefix}-error` : undefined}
                onChange={(event) => {
                  setJson(event.target.value);
                  setError("");
                }}
              />
            </Field>
          </FieldGroup>
          {error && (
            <Alert id={`${prefix}-error`} variant="destructive" border="none">
              <AlertDescription className="whitespace-pre-wrap wrap-break-word">
                {error}
              </AlertDescription>
            </Alert>
          )}
          <DialogFooter>
            {dialog === "import" ? (
              <Button onClick={importJson}>{labels.import}</Button>
            ) : (
              <>
                <Button
                  variant="outline"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(json);
                      announce(labels.copied);
                      setError("");
                    } catch {
                      setError(labels.copyFailed);
                    }
                  }}
                >
                  {labels.copy}
                </Button>
                <Button onClick={download}>{labels.download}</Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <AlertDialog
        open={confirmation !== null}
        onOpenChange={(open) => {
          if (!open) setConfirmation(null);
        }}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{confirmation?.title}</AlertDialogTitle>
            <AlertDialogDescription>
              {confirmation?.description}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>{labels.cancel}</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                const action = confirmation?.action;
                setConfirmation(null);
                action?.();
              }}
            >
              {confirmation?.title === labels.replaceTitle
                ? labels.replace
                : labels.remove}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </EditorContext.Provider>
  );
}

export { DopamineMenuEditor };
