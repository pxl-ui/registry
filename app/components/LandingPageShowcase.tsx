import { type ChangeEvent, useMemo, useRef, useState } from "react";

import { Calendar } from "@/components/ui/pxl/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/pxl/card";
import { Input } from "@/components/ui/pxl/input";
import { Keyboard, type KeyboardRef } from "@/components/ui/pxl/keyboard";
import { WheelList, WheelOption } from "@/components/ui/pxl/wheel-list";
import { WidgetArea } from "@/components/ui/pxl/widget-area";
import { DayView } from "@/components/widgets/pxl/day-view";

function SpriteWidget() {
  return (
    <WidgetArea size="sm">
      <Card size="lg" className="size-full">
        <CardContent className="p-8">
          <div
            className="size-full sprite-sheet sprite-cols-2 sprite-rows-2 sprite-animate-[0,1] sprite-duration-[1000ms]"
            style={{
              backgroundImage: "url(regulus.png)",
            }}
          >

          </div>
      </CardContent>
      </Card>
    </WidgetArea>
  )
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
              23.6, 23.3, 23, 23, 23, 22.5, 22.4, 22.4, 22.4, 23.3, 24.6, 25.6,
              25.4, 25.4, 25.4, 25.3, 25.3, 25.5, 25.1, 25.4, 25.3, 24.5, 25,
              24.7,
            ],
            weather_code: [
              0, 0, 3, 3, 3, 0, 0, 3, 2, 0, 0, 0, 0, 1, 3, 3, 3, 1, 3, 3, 3, 3,
              51, 3,
            ],
            is_day: [
              0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              0, 0,
            ],
          },
          daily: {
            temperature_2m_max: [25.6],
            temperature_2m_min: [22.4],
          },
        }}
        events={events}
      />
    </WidgetArea>
  );
}

function CalendarWidget() {
  return (
    <WidgetArea size="sm">
      <Card size="lg" className="size-full">
        <CardContent>
          <Calendar />
        </CardContent>
      </Card>
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
            size="2xs"
            inputName="preview"
            enableKeyNavigation
            keyboardRef={keyboard}
            onChange={onKbChange}
            onSubmit={() => console.log("onSubmit")}
          />
        </CardContent>
      </Card>
    </WidgetArea>
  );
}

function MenuWidget() {
  return (
    <WidgetArea size="sm">
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
    </div>
  );
}
