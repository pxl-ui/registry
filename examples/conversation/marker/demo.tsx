import {
  Marker,
  MarkerContent,
  MarkerIcon,
} from "@/components/features/pxl/conversation/marker";
import { Spinner } from "@/components/ui/pxl/spinner";

export default function MarkerDemo() {
  return (
    <div className="flex w-full max-w-sm flex-col gap-8 py-12">
      <Marker>
        <MarkerIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M8 22H4v-2h4v2Zm-4-2H2v-4h2v4Zm6 0H8v-4h2v4Zm7-1h-5v-2h5v2Zm2-2h-2v-5h2v5ZM8 16H4v-2h4v2Zm-1-4H5V2h2v10Zm13-2h-4V8h4v2Zm-4-2h-2V4h2v4Zm6 0h-2V4h2v4Zm-2-4h-4V2h4v2Z" />
          </svg>
        </MarkerIcon>
        <MarkerContent>Switched to a new branch</MarkerContent>
      </Marker>
      <Marker role="status">
        <MarkerIcon>
          <Spinner />
        </MarkerIcon>
        <MarkerContent className="shimmer">Thinking...</MarkerContent>
      </Marker>
      <Marker variant="separator">
        <MarkerContent>Conversation compacted</MarkerContent>
      </Marker>
      <Marker>
        <MarkerIcon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22 22h-2v-2h2v2Zm-2-2h-2v-2h2v2Zm-6-2H6v-2h8v2Zm4 0h-2v-2h2v2ZM6 16H4v-2h2v2Zm10 0h-2v-2h2v2ZM4 14H2V6h2v8Zm14 0h-2V6h2v8ZM6 6H4V4h2v2Zm10 0h-2V4h2v2Zm-2-2H6V2h8v2Z" />
          </svg>
        </MarkerIcon>
        <MarkerContent>Explored 4 files</MarkerContent>
      </Marker>
    </div>
  );
}
