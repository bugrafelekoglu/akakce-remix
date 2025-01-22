import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getPageFromUrl(searchParams: URLSearchParams) {
  return parseInt(searchParams.get("page") ?? "1");
}
