import { useMemo } from "react";

import { WidgetArea } from "@/components/ui/pxl/widget-area";
import { DayView } from "@/components/widgets/pxl/day-view";

export default function DayViewSuccessExample() {
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
    const inTwoDaysRef = new Date(ref);
    inTwoDaysRef.setDate(ref.getDate() + 2);
    const inTwoDays = inTwoDaysRef.toLocaleDateString("sv-SE");
    const inSevenDaysRef = new Date(ref);
    inSevenDaysRef.setDate(ref.getDate() + 7);
    const inSevenDays = inSevenDaysRef.toLocaleDateString("sv-SE");

    return [
      {
        id: "1",
        summary: "Team Standup",
        start: {
          date: today,
          dateTime: `${today}T09:00`,
        },
      },
      {
        id: "3",
        summary: "Grocery Shopping",
        start: {
          date: today,
          dateTime: `${today}T18:00`,
        },
      },
      {
        id: "2",
        summary: "Dentist Appointment",
        start: {
          date: today,
          dateTime: `${today}T14:30`,
        },
      },
      {
        id: "7",
        summary: "Car Maintenance",
        start: {
          date: inTwoDays,
          dateTime: `${inTwoDays}T10:00`
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
        id: "5",
        summary: "Project Deadline",
        start: {
          date: tomorrow,
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
      {
        id: "8",
        summary: "Book Club Meeting",
        start: {
          date: inSevenDays,
          dateTime: `${inSevenDays}T19:00`
        },
      },
    ];
  }, []);

  return (
    <div className="flex items-center justify-center min-h-23">
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
      </WidgetArea>
    </div>
  );
}
