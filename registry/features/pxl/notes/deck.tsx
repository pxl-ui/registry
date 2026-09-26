"use client";

import { AnimatePresence, motion } from "motion/react";
import type { ComponentProps } from "react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import { buttonVariants } from "@/components/ui/pxl/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/pxl/select";
import { cn } from "@/lib/utils";

import {
  Sticky,
  type StickyColor,
  StickyContent,
  stickyColors,
} from "./sticky";

type DeckState = Partial<Record<StickyColor, number>>;
type Theme = {
  label: string;
  variants: Partial<
    Record<
      StickyColor,
      {
        amount: number;
        className: string;
      }
    >
  >;
};

const deckThemes: Theme[] = [
  {
    label: "Supernova Neons",
    variants: {
      "aqua-splash": { ...stickyColors["aqua-splash"], amount: 5 },
      "acid-lime": { ...stickyColors["acid-lime"], amount: 5 },
      guava: { ...stickyColors.guava, amount: 5 },
      "tropical-pink": { ...stickyColors["tropical-pink"], amount: 5 },
      "iris-infusion": { ...stickyColors["iris-infusion"], amount: 5 },
    },
  },
  {
    label: "Energy Boost",
    variants: {
      "vital-orange": { ...stickyColors["vital-orange"], amount: 5 },
      "tropical-pink": { ...stickyColors["tropical-pink"], amount: 5 },
      limeade: { ...stickyColors.limeade, amount: 5 },
      "blue-paradise": { ...stickyColors["blue-paradise"], amount: 5 },
      sunnyside: { ...stickyColors.sunnyside, amount: 5 },
    },
  },
  {
    label: "Playful Primaries",
    variants: {
      "candy-apple-red": { ...stickyColors["candy-apple-red"], amount: 5 },
      "vital-orange": { ...stickyColors["vital-orange"], amount: 5 },
      sunnyside: { ...stickyColors.sunnyside, amount: 5 },
      limeade: { ...stickyColors.limeade, amount: 5 },
      "blue-paradise": { ...stickyColors["blue-paradise"], amount: 5 },
      "iris-infusion": { ...stickyColors["iris-infusion"], amount: 5 },
    },
  },
  {
    label: "Wanderlust Pastels",
    variants: {
      "pink-salt": { ...stickyColors["pink-salt"], amount: 5 },
      "positively-pink": { ...stickyColors["positively-pink"], amount: 5 },
      "orchid-frost": { ...stickyColors["orchid-frost"], amount: 5 },
      "washed-denim": { ...stickyColors["washed-denim"], amount: 5 },
      "fresh-mint": { ...stickyColors["fresh-mint"], amount: 5 },
      "pebble-gray": { ...stickyColors["pebble-gray"], amount: 5 },
    },
  },
  {
    label: "Oasis",
    variants: {
      "washed-denim": { ...stickyColors["washed-denim"], amount: 5 },
      "fresh-mint": { ...stickyColors["fresh-mint"], amount: 5 },
      limeade: { ...stickyColors.limeade, amount: 5 },
      "lucky-green": { ...stickyColors["lucky-green"], amount: 5 },
      "sea-glass": { ...stickyColors["sea-glass"], amount: 5 },
    },
  },
  {
    label: "Summer Joy",
    variants: {
      citron: { ...stickyColors.citron, amount: 5 },
      "papaya-fizz": { ...stickyColors["papaya-fizz"], amount: 5 },
      "power-pink": { ...stickyColors["power-pink"], amount: 5 },
      "washed-denim": { ...stickyColors["washed-denim"], amount: 5 },
      "fresh-mint": { ...stickyColors["fresh-mint"], amount: 5 },
    },
  },
  {
    label: "Simply Serene",
    variants: {
      "washed-denim": { ...stickyColors["washed-denim"], amount: 5 },
      "pebble-gray": { ...stickyColors["pebble-gray"], amount: 5 },
      "fresh-snow": { ...stickyColors["fresh-snow"], amount: 5 },
      "pink-salt": { ...stickyColors["pink-salt"], amount: 5 },
      "black-onyx": { ...stickyColors["black-onyx"], amount: 5 },
    },
  },
  {
    label: "Beachside Café",
    variants: {
      "fresh-mint": { ...stickyColors["fresh-mint"], amount: 5 },
      "aqua-splash": { ...stickyColors["aqua-splash"], amount: 5 },
      sunnyside: { ...stickyColors.sunnyside, amount: 5 },
      guava: { ...stickyColors.guava, amount: 5 },
      "pink-salt": { ...stickyColors["pink-salt"], amount: 5 },
    },
  },
  {
    label: "Floral Fantasy",
    variants: {
      limeade: { ...stickyColors.limeade, amount: 5 },
      "blue-paradise": { ...stickyColors["blue-paradise"], amount: 5 },
      sunnyside: { ...stickyColors.sunnyside, amount: 5 },
      "positively-pink": { ...stickyColors["positively-pink"], amount: 5 },
      guava: { ...stickyColors.guava, amount: 5 },
    },
  },
  {
    label: "Poptimistic",
    variants: {
      guava: { ...stickyColors.guava, amount: 5 },
      "vital-orange": { ...stickyColors["vital-orange"], amount: 5 },
      "aqua-splash": { ...stickyColors["aqua-splash"], amount: 5 },
      "acid-lime": { ...stickyColors["acid-lime"], amount: 5 },
      "power-pink": { ...stickyColors["power-pink"], amount: 5 },
    },
  },
  {
    label: "Sweet Sprinkles",
    variants: {
      "positively-pink": { ...stickyColors["positively-pink"], amount: 5 },
      "pink-salt": { ...stickyColors["pink-salt"], amount: 5 },
      "canary-yellow": { ...stickyColors["canary-yellow"], amount: 5 },
      "fresh-mint": { ...stickyColors["fresh-mint"], amount: 5 },
      moonstone: { ...stickyColors.moonstone, amount: 5 },
    },
  },
];

const GRID_ROTATE: ("left" | "none" | "right")[] = [
  "left",
  "right",
  "right",
  "left",
];

function variantOrderOf(state: DeckState): StickyColor[] {
  return Object.keys(state) as StickyColor[];
}

function isEmpty(state: DeckState) {
  return variantOrderOf(state).every((variant) => !(state[variant] ?? 0));
}

function pickRandom(state: DeckState): StickyColor | null {
  const entries = variantOrderOf(state)
    .map((variant) => [variant, state[variant] ?? 0] as const)
    .filter(([, count]) => count > 0);
  if (!entries.length) return null;
  const total = entries.reduce((sum, [, count]) => sum + count, 0);
  let roll = Math.random() * total;
  for (const [variant, count] of entries) {
    roll -= count;
    if (roll <= 0) return variant;
  }
  return entries[entries.length - 1][0];
}

function pickInOrder(
  state: DeckState,
  order: StickyColor[] = Object.keys(state) as StickyColor[],
): StickyColor | null {
  return order.find((variant) => (state[variant] ?? 0) > 0) ?? null;
}

function pickAlternate(
  state: DeckState,
  lastIndex: number,
  order: StickyColor[] = Object.keys(state) as StickyColor[],
): { color: StickyColor; index: number } | null {
  for (let step = 1; step <= order.length; step++) {
    const index = (lastIndex + step) % order.length;
    const color = order[index];
    if ((state[color] ?? 0) > 0) return { color, index };
  }
  return null;
}

function EmptyDeck({
  themes = deckThemes,
  selectTheme,
}: {
  themes: typeof deckThemes;
  selectTheme: (value: number) => void;
}) {
  return (
    <motion.div
      key="empty"
      className="h-full w-full"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
    >
      <div className="flex h-full flex-col items-center justify-center gap-6 text-center">
        <p className="text-muted-foreground">
          Your deck is empty. Please choose a new deck
        </p>
        <Select onValueChange={(value) => selectTheme(Number(value))}>
          <SelectTrigger size="default">
            <SelectValue placeholder="Deck Select" />
          </SelectTrigger>
          <SelectContent className="w-full">
            {themes.map((theme, index) => (
              <SelectItem
                key={theme.label}
                value={String(index)}
                className="w-full"
              >
                <div className="flex flex-col gap-1.5 items-center w-full">
                  <div className="flex gap-2 items-center">
                    {Object.entries(theme.variants).map(([k, v]) => (
                      <div key={k} className={cn("size-3", v.className)} />
                    ))}
                  </div>
                  {theme.label}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    </motion.div>
  );
}

function ColorPick({
  deck,
  pickColor,
}: {
  deck: DeckState;
  pickColor: (color: StickyColor) => void;
}) {
  const gridSize = useMemo(
    function calculateGridSize() {
      return Math.max(1, Math.ceil(Math.sqrt(Object.keys(deck).length)));
    },
    [deck],
  );

  return (
    <motion.div
      key="grid"
      role="group"
      aria-label="Pick a note"
      className="grid h-full w-full min-h-0 min-w-0 gap-4"
      style={{
        gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
        gridTemplateRows: `repeat(${gridSize}, 1fr)`,
      }}
      initial="hidden"
      animate="show"
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: 0.06 } },
      }}
    >
      <AnimatePresence>
        {Object.entries(deck).map(([variant, amount], index) => (
          <motion.button
            key={variant}
            type="button"
            layout
            variants={{
              hidden: { opacity: 0, scale: 0.7, y: 12 },
              show: { opacity: 1, scale: 1, y: 0 },
            }}
            exit={{
              opacity: 0,
              scale: 0.6,
              y: -24,
              rotate: index % 2 ? 12 : -12,
              transition: { duration: 0.25 },
            }}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.95 }}
            className={cn("aspect-square h-full w-full min-h-0 min-w-0 p-0")}
            onClick={() => pickColor(variant as StickyColor)}
          >
            <Sticky
              variant={variant as StickyColor}
              size="lg"
              rotate={GRID_ROTATE[index % GRID_ROTATE.length]}
              className={cn(
                "h-full w-full @container-size transition-opacity",
                amount === 0 && "opacity-40",
              )}
            >
              <StickyContent className="flex h-full items-center justify-center">
                <AnimatePresence mode="popLayout">
                  <motion.span
                    key={amount}
                    initial={{ opacity: 0, scale: 1.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.5 }}
                    transition={{ duration: 0.2 }}
                    className="font-serif text-[40cqh]! font-semibold"
                  >
                    {amount}
                  </motion.span>
                </AnimatePresence>
              </StickyContent>
            </Sticky>
          </motion.button>
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

function Stack({
  deck,
  mode,
  pickColor,
}: {
  deck: DeckState;
  mode: "random" | "order" | "alternate";
  pickColor: (color: StickyColor) => void;
}) {
  const alternateIndexRef = useRef(-1);
  const nextVariant = useMemo(
    function drawNext() {
      if (!deck) {
        return;
      }

      const remaining = Object.values(deck).reduce(
        (total, amount) => total + (amount ?? 0),
        0,
      );

      if (mode === "random") {
        return { color: pickRandom(deck), remaining };
      }

      if (mode === "order") {
        return { color: pickInOrder(deck), remaining };
      }

      if (mode === "alternate") {
        return { ...pickAlternate(deck, alternateIndexRef.current), remaining };
      }
    },
    [deck, mode],
  );

  const handlePickVariant = useCallback(
    function pickVariant() {
      if (!nextVariant?.color) {
        return;
      }

      if ("index" in nextVariant && typeof nextVariant.index === "number") {
        alternateIndexRef.current = nextVariant.index;
      } else {
        alternateIndexRef.current = -1;
      }

      pickColor(nextVariant.color);
    },
    [nextVariant, pickColor],
  );

  return (
    <motion.div
      key="draw"
      className="relative h-full w-full"
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92 }}
    >
      <div className="bg-border/70 pixel-rounded absolute inset-0 translate-x-1.5 translate-y-2 -rotate-3" />
      <div className="bg-border/40 pixel-rounded absolute inset-0 -translate-x-1 translate-y-3 rotate-2" />

      <button
        type="button"
        aria-label="Draw the next note"
        disabled={!nextVariant}
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "relative h-full w-full p-0 perspective-distant disabled:opacity-100",
        )}
        onClick={handlePickVariant}
      >
        <motion.div
          className="relative h-full w-full transform-3d"
          transition={{ duration: 0.45, ease: "easeInOut" }}
        >
          <Sticky
            variant={nextVariant?.color ?? "default"}
            size="lg"
            className="h-full w-full @container-size"
          >
            <StickyContent className="flex h-full items-center justify-center">
              <span className="font-serif text-[30cqh]! font-semibold">
                {nextVariant?.remaining}
              </span>
            </StickyContent>
          </Sticky>
        </motion.div>
      </button>
    </motion.div>
  );
}

function Deck({
  className,
  infinite = false,
  mode = "user",
  selectedTheme: defaultSelectedTheme,
  themes = deckThemes,
  state: controlledState,
  onNotePick,
  onThemeSelect,
  onDeckEnd,
  ...props
}: ComponentProps<"div"> & {
  /**
   * Whether picking a new note removes it from the state or not.
   */
  infinite?: boolean;
  /**
   * Color picking logic:
   * - random: Next note color is picked randomly among the options
   * - alternate: Next note is picked from the next color in a cycle
   * - order: Next note is picked from the first non-empty color pool
   * - user: User can pick the note color from the select
   */
  mode?: "random" | "alternate" | "order" | "user";
  themes?: typeof deckThemes;
  selectedTheme?: number;
  onNotePick?: (color: StickyColor, nextState: DeckState) => void;
  onThemeSelect?: (index: number, theme: Theme) => void;
  onDeckEnd?: () => void;
  state?: Partial<Record<StickyColor, number>>;
}) {
  const [selectedTheme, setSelectedTheme] = useState(defaultSelectedTheme);
  const [deck, setDeck] = useState<DeckState>(controlledState ?? {});

  const commitPick = useCallback(
    function commitPick(color: StickyColor) {
      const count = deck[color] ?? 0;
      if (count <= 0) return;

      const nextState: DeckState = { ...deck };
      if (!infinite) nextState[color] = count - 1;

      onNotePick?.(color, nextState);
      if (controlledState === undefined) setDeck(nextState);
      if (isEmpty(nextState)) onDeckEnd?.();
    },
    [controlledState, deck, infinite, onDeckEnd, onNotePick],
  );

  const selectTheme = useCallback(
    function selectTheme(index: number) {
      const theme = themes[index];
      if (!theme) return;

      setSelectedTheme(index);
    },
    [themes],
  );

  useEffect(
    function handleActiveThemeChange() {
      if (typeof selectedTheme !== "number") {
        return;
      }

      const theme = themes[selectedTheme];

      const deck = Object.entries(theme.variants).reduce(
        (acc, variant) =>
          Object.assign(acc, {
            [variant[0]]: variant[1].amount,
          }),
        {},
      );

      setDeck(deck);
      onThemeSelect?.(selectedTheme, theme);
    },
    [themes, selectedTheme, onThemeSelect],
  );

  return (
    <div
      data-slot="deck"
      className={cn("relative aspect-square w-full", className)}
      {...props}
    >
      <AnimatePresence mode="wait">
        {isEmpty(deck) ? (
          <EmptyDeck selectTheme={selectTheme} themes={themes} />
        ) : mode === "user" ? (
          <ColorPick deck={deck} pickColor={commitPick} />
        ) : (
          <Stack deck={deck} pickColor={commitPick} mode={mode} />
        )}
      </AnimatePresence>
    </div>
  );
}

export { Deck, deckThemes };
