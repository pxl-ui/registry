import type { ComponentProps } from "react";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/pxl/avatar";
import { cn } from "@/lib/utils";

function ProfileCard({
  orientation = "default",
  className,
  children,
  ...props
}: ComponentProps<"div"> & {
  orientation?: "default" | "horizontal" | "vertical";
}) {
  return (
    <div
      data-orientation={orientation}
      data-slot="profile-card"
      className={cn(
        "group/profile-card flex flex-row items-center gap-x-1.5 data-[orientation=vertical]:gap-y-2.5",
        "data-[orientation=vertical]:flex-col data-[orientation=vertical]:text-center",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function ProfileCardAvatar({
  className,
  src,
  name,
  ...props
}: Omit<ComponentProps<typeof Avatar>, "children"> & {
  src: string;
  name?: string;
}) {
  return (
    <Avatar
      data-slot="profile-card-avatar"
      className={cn("overflow-hidden", className)}
      {...props}
    >
      <AvatarImage
        src={src ?? undefined}
        alt={name ? `${name}'s avatar` : "Avatar"}
      />
      <AvatarFallback>{name?.slice(0, 2) || "ME"}</AvatarFallback>
    </Avatar>
  );
}

function ProfileCardDetails({
  className,
  children,
  name,
  body,
  ...props
}: ComponentProps<"div"> & { name?: string; body?: string }) {
  return (
    <div
      data-slot="profile-card-details"
      className={cn(
        "flex flex-col group-data-[orientation=horizontal]/profile-card:gap-2",
        "group-data-[orientation=horizontal]/profile-card:w-full group-data-[orientation=horizontal]/profile-card:flex-row group-data-[orientation=horizontal]/profile-card:items-center group-data-[orientation=horizontal]/profile-card:justify-between",
        "group-data-[orientation=vertical]/profile-card:flex-col group-data-[orientation=vertical]/profile-card:items-center",
        className,
      )}
      {...props}
    >
      {children ?? (
        <>
          {name && (
            <ProfileCardName data-slot="details-name">{name}</ProfileCardName>
          )}
          {body && (
            <ProfileCardBody data-slot="details-body">{body}</ProfileCardBody>
          )}
        </>
      )}
    </div>
  );
}

function ProfileCardName({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="profile-card-name"
      className={cn("flex items-center gap-1 text-sm font-medium", className)}
      {...props}
    />
  );
}

function ProfileCardBody({ className, ...props }: ComponentProps<"div">) {
  return (
    <div
      data-slot="profile-card-body"
      className={cn("text-xs text-muted-foreground", className)}
      {...props}
    />
  );
}

function ProfileCardVerifiedBadge({
  className,
  ...props
}: ComponentProps<"svg">) {
  return (
    <svg
      data-slot="profile-card-verified-badge"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("size-3.5 fill-primary-foreground", className)}
      {...props}
    >
      <path d="M18 4H20V6H22V18H20V20H18V22H6V20H4V18H2V6H4V4H6V2H18V4ZM15 9H13V11H11V13H9V11H5V13H7V15H9V17H11V15H13V13H15V11H17V9H19V7H15V9Z"></path>
    </svg>
  );
}

export {
  ProfileCard,
  ProfileCardAvatar,
  ProfileCardBody,
  ProfileCardDetails,
  ProfileCardName,
  ProfileCardVerifiedBadge,
};
