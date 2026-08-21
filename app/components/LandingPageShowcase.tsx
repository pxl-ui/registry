import { type ChangeEvent, useMemo, useRef, useState } from "react";

import { Calendar } from "@/components/ui/pxl/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/pxl/card";
import {
  DialogueBox,
  DialogueMessage,
  DialoguePortrait,
} from "@/components/ui/pxl/dialogue-box";
import { Input } from "@/components/ui/pxl/input";
import { Keyboard, type KeyboardRef } from "@/components/ui/pxl/keyboard";
import { Scores } from "@/components/ui/pxl/scores";
import { WheelList, WheelOption } from "@/components/ui/pxl/wheel-list";
import { WidgetArea } from "@/components/ui/pxl/widget-area";
import { DayView } from "@/components/widgets/pxl/day-view";
import { url } from "~/lib/utils";

function SpriteWidget() {
  return (
    <WidgetArea size="sm">
      <a className="size-full" href={url("content/sprite-canvas")}>
        <Card size="lg" className="size-full">
          <CardContent className="p-8">
            <div
              className="size-full sprite-sheet sprite-cols-2 sprite-rows-2 sprite-animate-[0,1] sprite-duration-[1000ms]"
              style={{
                backgroundImage: "url(sprites/regulus.png)",
              }}
            ></div>
          </CardContent>
        </Card>
      </a>
    </WidgetArea>
  );
}

function DayViewWidget() {
  const hourlyTimeRange = useMemo(() => {
    // sv-SE returns date in correct ISO format (YYYY-MM-DD)
    const isoDate = new Date().toLocaleDateString("sv-SE");

    return Array(24)
      .fill(null)
      .map((_, idx) => `${isoDate}T${idx.toString().padStart(2, "0")}:00`);
  }, []);

  const events = useMemo(() => {
    const ref = new Date();
    const today = ref.toLocaleDateString("sv-SE");
    const tomorrowRef = new Date(ref);
    tomorrowRef.setDate(ref.getDate() + 1);
    const tomorrow = tomorrowRef.toLocaleDateString("sv-SE");

    return [
      {
        id: "3",
        summary: "Grocery Shopping",
        start: {
          date: today,
          dateTime: `${today}T18:00`,
        },
      },
      {
        id: "4",
        summary: "Yoga Class",
        start: {
          date: tomorrow,
          dateTime: `${tomorrow}T07:30`,
        },
      },
      {
        id: "6",
        summary: "Dinner with Friends",
        start: {
          date: tomorrow,
          dateTime: `${tomorrow}T20:00`,
        },
      },
    ];
  }, []);

  return (
    <WidgetArea size="md">
      <a className="size-full" href={url("widgets/day-view")}>
        <DayView
          status="success"
          className="size-full"
          forecast={{
            hourly_units: {
              temperature_2m: "°C",
            },
            hourly: {
              time: hourlyTimeRange,
              temperature_2m: [
                23.6, 23.3, 23, 23, 23, 22.5, 22.4, 22.4, 22.4, 23.3, 24.6,
                25.6, 25.4, 25.4, 25.4, 25.3, 25.3, 25.5, 25.1, 25.4, 25.3,
                24.5, 25, 24.7,
              ],
              weather_code: [
                0, 0, 3, 3, 3, 0, 0, 3, 2, 0, 0, 0, 0, 1, 3, 3, 3, 1, 3, 3, 3,
                3, 51, 3,
              ],
              is_day: [
                0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
                1, 0, 0,
              ],
            },
            daily: {
              temperature_2m_max: [25.6],
              temperature_2m_min: [22.4],
            },
          }}
          events={events}
        />
      </a>
    </WidgetArea>
  );
}

function CalendarWidget() {
  return (
    <WidgetArea size="sm">
      <a className="size-full" href={url("content/calendar")}>
        <Card size="lg" className="size-full">
          <CardContent>
            <Calendar />
          </CardContent>
        </Card>
      </a>
    </WidgetArea>
  );
}

function KeyboardWidget() {
  const [kbValue, setKbValue] = useState("Regulus");
  const input = useRef<HTMLInputElement>(null);
  const keyboard = useRef<KeyboardRef>(null);

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setKbValue(event.target.value);
    keyboard.current?.setInput(event.target.value);
  };

  const onKbChange = (value: string) => {
    setKbValue(value);
  };

  return (
    <WidgetArea size="sm">
      <a className="size-full" href={url("interaction/keyboard")}>
        <Card size="lg" className="size-full">
          <CardHeader>
            <CardDescription>Input your name</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col justify-end gap-2">
            <Input
              size="xs"
              defaultValue="Regulus"
              ref={input}
              value={kbValue}
              onChange={onChangeInput}
              name="preview"
            />
            <Keyboard
              size="3xs"
              inputName="preview"
              enableKeyNavigation
              keyboardRef={keyboard}
              onChange={onKbChange}
              onSubmit={() => console.log("onSubmit")}
            />
          </CardContent>
        </Card>
      </a>
    </WidgetArea>
  );
}

function MenuWidget() {
  return (
    <WidgetArea size="sm">
      <a className="size-full" href={url("navigation/wheel-list")}>
        <Card size="lg" className="size-full">
          <CardHeader>
            <CardTitle>Menu</CardTitle>
          </CardHeader>
          <CardContent>
            <WheelList
              align="start"
              visibleCount={3}
              label="Pick a start time"
              defaultValue="ITEM"
            >
              {[
                "POKÉDEX",
                "POKÉMON",
                "ITEM",
                "TRAINER",
                "SAVE",
                "OPTION",
                "EXIT",
              ].map((i) => (
                <WheelOption key={i} value={i}>
                  {i}
                </WheelOption>
              ))}
            </WheelList>
          </CardContent>
        </Card>
      </a>
    </WidgetArea>
  );
}

function ScoresWidget() {
  return (
    <WidgetArea size="sm">
      <Card size="lg" className="size-full">
        <CardHeader>
          <CardTitle>High Scores</CardTitle>
        </CardHeader>
        <CardContent scrollable>
          <Scores
            className="w-full"
            items={[
              {
                avatar:
                  "https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png",
                description: "IHS",
                title: "1,000,000",
              },
              {
                avatar:
                  "https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png",
                description: "AAA",
                title: "900,000",
              },
              {
                avatar:
                  "https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png",
                description: "KNM",
                title: "700,000",
              },
              {
                avatar:
                  "https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png",
                description: "XLL",
                title: "550,000",
              },
              {
                avatar:
                  "https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png",
                description: "RSS",
                title: "90,000",
              },
              {
                avatar:
                  "https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png",
                description: "AAA",
                title: "75,000",
              },
              {
                avatar:
                  "https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png",
                description: "CKL",
                title: "60,000",
              },
              {
                avatar:
                  "https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png",
                description: "ABB",
                title: "1,000",
              },
            ]}
          />
        </CardContent>
      </Card>
    </WidgetArea>
  );
}

function DialogueBoxWidget() {
  return (
    <WidgetArea size="md" className="h-full flex flex-col justify-between">
      <DialogueBox size="lg" className="w-full">
        <DialogueMessage
          className="h-[2lh]"
          text="A UI kit for people making things that blink, bounce, and beep. Sharp pixel edges paired with fluid, modern interaction — nothing here looks like a template, and nothing here should stay looking like ours once you're done with it."
          onEnd={() => console.log("onEnd")}
        />
        <DialoguePortrait
          className="bg-primary"
          alt="@hero"
          fallback="IHS"
          src="https://raw.githubusercontent.com/pxl-ui/registry/main/app/public/portraits/hero.png"
        />
      </DialogueBox>
    </WidgetArea>
  );
}

export default function LandingPageShowcase() {
  return (
    <div className="not-content w-full h-full flex flex-row flex-wrap gap-4 justify-center">
      <SpriteWidget />

      <DayViewWidget />

      <CalendarWidget />

      <KeyboardWidget />

      <MenuWidget />

      <ScoresWidget />

      <DialogueBoxWidget />
    </div>
  );
}
