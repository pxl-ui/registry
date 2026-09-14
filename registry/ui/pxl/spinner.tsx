import type { ComponentProps } from "react";

import { cn } from "@/lib/utils";

function Spinner1({ className, ...props }: ComponentProps<"svg">) {
  return (
    <svg
      data-slot="spinner"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin duration-2000", className)}
      {...props}
    >
      <path d="M4 12H2L2 6H4V12ZM6 6H4V4H6V6ZM12 4L6 4V2L12 2V4Z" />
    </svg>
  );
}

function Spinner2({ className, ...props }: ComponentProps<"svg">) {
  return (
    <svg
      data-slot="spinner"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin duration-2000", className)}
      {...props}
    >
      <path d="M14 23H10V19H14V23ZM7 21H3L3 17H7V21ZM21 20H18V17H21V20ZM6 9V14H1L1 9H6ZM23 13H20V10H23V13ZM3 11V12H4V11H3ZM13 7H7L7 1L13 1V7ZM20 6H18V4L20 4V6ZM9 5H11V3H9V5Z"></path>
    </svg>
  );
}

function Spinner3({ className, ...props }: ComponentProps<"svg">) {
  return (
    <svg
      data-slot="spinner"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      role="status"
      aria-label="Loading"
      className={cn("size-4 animate-spin duration-2000", className)}
      {...props}
    >
      <path d="M13 22H11V15H13V22ZM5 21H3V19H5V21ZM21 19V21H19V19H21ZM7 19H5V17H7V19ZM19 19H17V17H19V19ZM9 17H7V15H9V17ZM17 17H15V15H17V17ZM9 13H2V11H9V13ZM22 13H15V11H22V13ZM9 9H7V7H9V9ZM13 9H11V2H13V9ZM17 9H15V7H17V9ZM7 7H5V5H7V7ZM19 7H17V5H19V7ZM5 5H3V3H5V5ZM21 5H19V3H21V5Z" />
    </svg>
  );
}

Spinner2.Spinner1 = Spinner1;
Spinner2.Spinner2 = Spinner2;
Spinner2.Spinner3 = Spinner3;

export { Spinner2 as Spinner };
