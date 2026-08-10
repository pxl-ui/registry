import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/pxl/card";
import { WidgetArea } from "@/components/ui/pxl/widget-area";

export default function CardVariantsExample() {
  return (
    <div className="flex flex-col gap-2.5 items-center justify-center min-h-92">
      <WidgetArea size="md">
        <Card size="lg" className="size-full" variant="primary">
          <CardHeader>
            <CardTitle>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M18 22H6V20H18V22ZM6 20H4V18H6V20ZM20 20H18V18H20V20ZM4 18H2V6H4V18ZM22 18H20V6H22V18ZM13 17H11V11H13V17ZM13 9H11V7H13V9ZM6 6H4V4H6V6ZM20 6H18V4H20V6ZM18 4H6V2H18V4Z"></path></svg>
              Primary
            </CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </WidgetArea>
      <WidgetArea size="md">
        <Card size="lg" className="size-full" variant="success">
          <CardHeader>
            <CardTitle>
              <svg
                aria-label="check-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M10 18H8v-2h2zm-2-2H6v-2h2zm4-2v2h-2v-2zm-6 0H4v-2h2zm8 0h-2v-2h2zm2-2h-2v-2h2zm2-2h-2V8h2zm2-2h-2V6h2z"></path>
              </svg>
              Success
            </CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </WidgetArea>
      <WidgetArea size="md">
        <Card size="lg" className="size-full" variant="danger">
          <CardHeader>
            <CardTitle>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M4 13h8v6h2v2h-2v2h-2v-8H2v-4h2v2Zm12 6h-2v-2h2v2Zm2-2h-2v-2h2v2Zm2-2h-2v-2h2v2Zm-6-6h8v4h-2v-2h-8V5h-2V3h2V1h2v8Zm-8 2H4V9h2v2Zm2-2H6V7h2v2Zm2-2H8V5h2v2Z"></path></svg>
              Danger
            </CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </WidgetArea>
      <WidgetArea size="md">
        <Card size="lg" className="size-full" variant="warning">
          <CardHeader>
            <CardTitle>
              <svg
                aria-label="warning-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M14 22h-4v-2h4v2Zm-4-2H8v-2h2v2Zm6 0h-2v-2h2v2Zm-8-2H6v-2h2v2Zm10 0h-2v-2h2v2Zm-5-1h-2v-2h2v2Zm-7-1H4v-2h2v2Zm14 0h-2v-2h2v2ZM4 14H2v-4h2v4Zm18 0h-2v-4h2v4Zm-9-7v6h-2V7h2Zm-7 3H4V8h2v2Zm14 0h-2V8h2v2ZM8 8H6V6h2v2Zm10 0h-2V6h2v2Zm-8-2H8V4h2v2Zm6 0h-2V4h2v2Zm-2-2h-4V2h4v2Z"></path>
              </svg>
              Warning
            </CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </WidgetArea>
      <WidgetArea size="md">
        <Card size="lg" className="size-full" variant="info">
          <CardHeader>
            <CardTitle>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M16 22H8v-2h8v2Zm-8-2H6v-2h2v2Zm10 0h-2v-2h2v2ZM6 18H4v-6h2v6Zm14 0h-2v-8h2v8Zm-10-4H8v-2h2v2Zm-2-2H6V8h2v4Zm4-8h2v2h-2v6h-2V2h2v2Zm6 6h-2V8h2v2Zm-2-2h-2V6h2v2Z"></path></svg>
              Info
            </CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </WidgetArea>
      <WidgetArea size="md">
        <Card size="lg" className="size-full" variant="secondary">
          <CardHeader>
            <CardTitle>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M18 22H6V20H18V22ZM6 20H4V18H6V20ZM20 20H18V18H20V20ZM4 18H2V6H4V18ZM22 18H20V6H22V18ZM13 17H11V11H13V17ZM13 9H11V7H13V9ZM6 6H4V4H6V6ZM20 6H18V4H20V6ZM18 4H6V2H18V4Z"></path></svg>
              Secondary
            </CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </WidgetArea>
      <WidgetArea size="md">
        <Card size="lg" className="size-full" variant="muted">
          <CardHeader>
            <CardTitle>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M18 22H6V20H18V22ZM6 20H4V18H6V20ZM20 20H18V18H20V20ZM4 18H2V6H4V18ZM22 18H20V6H22V18ZM13 17H11V11H13V17ZM13 9H11V7H13V9ZM6 6H4V4H6V6ZM20 6H18V4H20V6ZM18 4H6V2H18V4Z"></path></svg>
              Muted
            </CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </WidgetArea>
      <WidgetArea size="md">
        <Card size="lg" className="size-full" variant="accent">
          <CardHeader>
            <CardTitle>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M18 22H6V20H18V22ZM6 20H4V18H6V20ZM20 20H18V18H20V20ZM4 18H2V6H4V18ZM22 18H20V6H22V18ZM13 17H11V11H13V17ZM13 9H11V7H13V9ZM6 6H4V4H6V6ZM20 6H18V4H20V6ZM18 4H6V2H18V4Z"></path></svg>
              Accent
            </CardTitle>
          </CardHeader>
          <CardContent></CardContent>
        </Card>
      </WidgetArea>
    </div>
  );
}