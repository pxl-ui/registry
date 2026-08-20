import { Icons, type StarlightIcon } from "../icons";
import { z } from "./zod";

const iconNames = Object.keys(Icons) as [StarlightIcon, ...StarlightIcon[]];

/** String that matches the name of one of Starlight’s built-in icons. */
export const IconSchema = () => z.enum(iconNames);
